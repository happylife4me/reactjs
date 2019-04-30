import React from "react"

//1. create the isContext
const MyContext = React.createContext();

class MyProvider extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"Murthy",
            salary:5000,
            job:"Engineer"
        }
    }

    render(){
        return(
            <MyContext.Provider value={{
                //date
                state:this.state,
                //function
                incrementSalary: () => this.setState({salary:this.state.salary+1000})
            }}>
            {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default class Context extends React.Component{
    render(){
        return(
            <MyProvider>
                <div className="bg-success">
                    <h2 className="bg-info">React Context API Demo</h2>
                    <Family></Family>
                </div>
            </MyProvider>
        )
    }
}


const Family =() =>{
    return(
        <div>
            <Person></Person>
            <br></br>
            <PersonDalary></PersonDalary>
        </div>
    )
}

class Person extends React.Component{
    render(){
        return(
            <div>
            <MyContext.Consumer>
                {
                    (context) => (
                        <React.Fragment>
                            <h3 className="bg-primary">Person details</h3>
                            <p>Hi !{context.state.name}</p>

                            <h3 className="bg-danger">Salary</h3>
                            <p>Salary : {context.state.salary}</p>
                        </React.Fragment>
                    )
                }
            </MyContext.Consumer>
            </div>
        )
    }
}

class PersonDalary extends React.Component{
    render(){
        return(
            <div>
            <MyContext.Consumer>
                {
                    (context) => (
                        <React.Fragment>
                            <h3 className="bg-danger">Salary</h3>
                            <p>Salary : {context.state.salary}</p>
                            <button className="btn btn-primary" onClick={context.incrementSalary}>Update Salary</button>
                        </React.Fragment>
                    )
                }
            </MyContext.Consumer>
            </div>
        )
    }
}





