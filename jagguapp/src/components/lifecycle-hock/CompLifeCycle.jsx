import React from "react"

class CompLifeCycle extends React.Component{

    constructor(props){
        //1. initilization phase

        super(props);
        this.state = {
            data: 1,
            msg: "Initial data .."
        }
    }

    setNewNumber(e){
        this.setState({data:this.state.data + 1})
    }

    updateState(e){
        this.setState({msg:e.target.value})
    }

    //2. Inital render
    render(){
        return(
            <div>
                <button onClick={(event) => this.setNewNumber(event)}>Add</button>

                <Content myNamber={this.state.data}></Content>

                <br></br>

                <input type ="text" 
                value = {this.state.msg} 
                onChange={(e) => this.updateState(e)}></input>
                <h3>{this.setState.msg}</h3>
            </div>
        )
    }
}//Parent component is completed

//child Comp
class Content extends React.Component{
    constructor(props){
        super(props);
        this.state={name:"Murthy", isPassed: false}
        console.log("In constructor : " + props.myNamber);
        console.log("1. Content Constuctor fired - Initization phase : " + props.myNamber);
    }

    handleScroll = () =>{
        console.log("handleScroll is running");
    }

    componentWillMount(){
        console.log("1.WillMount => ", this.props.myNamber);
    }

    componentDidMount(){
        console.log("2.DidMount => Reset or release the data ", this.props.myNamber);
    }

    componentWillReceiveProps(nextProps){
        console.log("3.WillReceiveProps => set default props here and validate props here ", this.props.myNamber);
       //the old props can be access via this.props inside this.
       //you can set state according state 
        console.log("nextProps" , nextProps)
       this.setState({
           isPassed: nextProps.myNamber <= 5
       })
       console.log("nextProps" , nextProps)
    }

    static getDerivedStateFromProps(nextProps, nextState){
        console.log("getDerivedStateFromProps");
        console.log(nextState.name)
        console.log(nextProps, nextState)
        return{};
    }


    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate => decide whether to re-render ot not.");
        console.log(nextState, nextProps);

        console.log("4. shouldComponentUpdate rendered");

        if (nextProps.myNamber > 3){
            return true;
        }
        else
        {
            return false;
        }
    }

    componentDidUpdate(prevProps, PrevState){
        console.log("7. DidUpdate -> you can rollback state here to previous state");
    }

    componentWillUnmount(){
        console.log("8. WillUnmount -> release the resource here or cache data");
    }

    render(){
        return (
            <div>
                <h3>{this.props.myNamber}</h3>
            </div>
        )
    }


    
    
}

export default CompLifeCycle;