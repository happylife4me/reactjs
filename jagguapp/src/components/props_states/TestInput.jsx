import React, {Component} from 'react'

export default class TextInput extends Component{
    constructor(props){
        super(props);
    }

    

    render(){
        return(
            <div>
                <input type="text" value=""></input>
                <div>Enter Name</div>
                <input type="text" value={this.props.inputText} onChange={this.props.handleChange.bind(this)} />

                {this.props.inputText ? console.log("Valid") : console.log("No Data")}

                {this.props.inputText ? <TextDisplay text={this.props.inputText } /> : <TextDisplay text= "Enter valid Name" /> }

            </div>
        )
    }
}


const TextDisplay = (props) =>{
    let myStyle = {
        fontSize:20, 
        color:'#FF0000'
    }

    return (
         <div style={myStyle}>{props.text}</div>
    )
}
