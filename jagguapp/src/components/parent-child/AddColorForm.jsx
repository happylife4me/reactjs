import React,{Component } from 'react'

export default class AddColorForm extends Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
        this.state = {title:"",color:""}
    } 
    submit(e) {
        // Object Destructuring
        const { _title, _color } = this.refs
        console.log(this.refs);
        e.preventDefault();
        alert(`New Color: ${_title.value} ${_color.value}`)
        this.setState({title:_title.value,color:_color.value})
        _title.value = '';
        _color.value = '#000000';
        _title.focus();
        
    }
    render() {
        let mystyle = {color: this.state.color}
    return (
        <div>
    <form onSubmit={this.submit}>
    <input ref="_title"
        type="text"
        placeholder="color title..." required/>

    <input ref="_color"
          type="color" required/>
          
        <button>ADD</button>
    </form>
    <h4 style={mystyle}> {this.state.title} {this.state.color}</h4>
    </div>
    )
    }
}
