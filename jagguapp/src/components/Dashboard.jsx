import React, { PureComponent } from 'react'
// import StateFullApp from "./props_states/Statefullapp";
import ChildParentInvoke from "./parent-child/ChildParentInvoke"
import RefDemo from "./parent-child/RefDemo"
import AddColorForm from "./parent-child/AddColorForm"
import Context from  "./context/context-api"

export default class Dashbord extends PureComponent{
    constructor(props){
        super(props)
        this.state ={}
    }
    
    render(){
        return(
            <div>
                {/* <StateFullApp></StateFullApp> */}
                <ChildParentInvoke></ChildParentInvoke>
                <RefDemo></RefDemo>
                <AddColorForm></AddColorForm>
                <h3>
                    Put your Business Components tree here
                </h3>
                <Context></Context>

            </div>
        )
    }
}
