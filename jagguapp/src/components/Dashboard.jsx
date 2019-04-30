import React, { PureComponent } from 'react'
// import StateFullApp from "./props_states/Statefullapp";
import ChildParentInvoke from "./parent-child/ChildParentInvoke"
import RefDemo from "./parent-child/RefDemo"
import AddColorForm from "./parent-child/AddColorForm"
import Context from  "./context/context-api"
import CompLifeCycle from "./lifecycle-hock/CompLifeCycle"

import WeatherComponent from "./lifecycle-hock/WeatherComponent"

import FormApp from "./FormValidastion/FormApp"
import HOC from "./HOC/HOC"

export default class Dashbord extends PureComponent{
    constructor(props){
        super(props)
        this.state ={}
    }
    
    render(){
        return(
            <div>
                {/* <StateFullApp></StateFullApp> */}
                {/* <ChildParentInvoke></ChildParentInvoke>
                <RefDemo></RefDemo>
                <AddColorForm></AddColorForm>
                <h3>
                    Put your Business Components tree here
                </h3>
                <Context></Context> */}

                {/* <CompLifeCycle></CompLifeCycle> */}

                {/* <WeatherComponent></WeatherComponent> */}

                {/* <FormApp></FormApp> */}
                
                <HOC></HOC>

            </div>
        )
    }
}


// https://bit.ly/2Gzolg4
