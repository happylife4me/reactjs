import React from 'react'

class WeatherComponent extends React.Component{
    constructor(props){
        super(props);
            this.state ={
                weather: "Sunny",
                pics:[]
            }
    }

    componentDidMount(){
        console.log("inside componentDidMount methid");

        //Reset Call
        fetch('https://randomuser.me/api/?results:100')
        .then(results =>{
            return results.json();
        }).then(data => {
            let pics = data.results.map(pic => {
                return(
                    <div key={Math.random()}>
                        <img src={pic.picture.large}></img>
                    </div>
                )
            })
            this.setState({pics:pics})
            console.log("state", this.state.pics);
        })
    }

    changeName(){
        this.setState({weather:"Rainy"});
    }

    render(){
        console.log("inside the render");
        console.log("render => state", this.state.pics);
        return(
            <div>
                <h1>Today Weather is {this.state.weather}</h1>
                <button onClick={(e)=> this.changeName}>Change weather to Rainy</button>
                <span>
                    {this.state.pics}
                </span>
            </div>
        )
    }
}

export default WeatherComponent;

