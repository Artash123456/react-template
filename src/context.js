import React, { Component } from 'react'
import axios from "axios"
const SuperContext = React.createContext();
class SuperProvider extends Component {
    state = {
        isOpen:true,
        users:[],

    }
    // isValidEmail = value => {
    //     if (!value && value !== '') return false;
    //     const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return regex.test(value);
    // };




handleChange = ()=>{
    this.setState({isOpen:!this.state.isOpen})
}

getData = () =>{
    axios({
        method: 'GET',
        url:'https://jsonplaceholder.typicode.com/todos/1/users'
      }).then(response =>  this.setState({users:response.data})
      )
}


componentDidMount(){

    this.getData()
}

render() {
            return (
                <SuperContext.Provider value = {{...this.state, handleChange:this.handleChange, changInput:this.changeInput, isOpen:this.state.isOpen , users:this.state.users}}>
                    {this.props.children}
                </SuperContext.Provider>
        )
    }   
}
const SuperConsumer = SuperContext.Consumer;

export function withSuperConsumer(Component){
    return function ConcumerWrapper(props){
        return <SuperConsumer>
            {value=><Component {...props} context={value} changeInput={props.changeInput}/>}
        </SuperConsumer>
    }
}
export {SuperProvider, SuperConsumer, SuperContext}