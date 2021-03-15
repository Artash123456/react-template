import React, { PureComponent } from 'react'
import "./input.css"

class Register extends PureComponent {
    state={
        form:{
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            confirmpassword:"",
        },
        error:{
            firstName:false,
            lastName:false,
            email:false,
            password:false,
            confirmpassword:false
        },
        disableSubbmit:false
    };







isValidEmail = (value) => {
    if (!value && value !== '') return false;
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(value);
};

changeInput = (e) => {
    const { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({ form })
}
validate = () => {
    let isValid = true;
    const errors = {
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        confirmpassword: false,
    }
      if (!this.state.form.firstName) {
        errors.firstName = true;
        isValid = false;
      }
        
      if (!this.state.form.lastName) {
        errors.lastName = true;
        isValid = false;
      }
      if (!this.state.form.email) {
        errors.email = true;
        isValid = false;
      }
      if (!this.state.form.password) {
        errors.password = true;
        isValid = false;
      }
  
      if (!this.state.form.confirmpassword) {
        errors.confirmpassword = true;
        isValid = false;
      }
      this.setState({error: errors })
      console.log(this.state.error);
      console.log(errors);
      return isValid;
    }
    handleSubmit = (e)=>{
        e.preventDefault()
        if(this.validate()){
        this.setState({disableSubbmit:false})
    }
}
    render() {
       
        const {error} = this.state
        console.log(error);
        return (
            <div className="registration pages-forms">
            <form className="reg">
                <h1>Create Account</h1>


                <div className="inp-row">
                    <div className="inp-r">
                        <label className={error.firstName?"error_message":""}>firstName</label>
                        <input 
                        type="text"
                        name="firstName"
                        placeholder="Enter First Name..." 
                        onChange={(e)=>this.changeInput(e)}/>
                    </div>
                    <div className="inp-r">
                        <label className={error.lastName?"error_message":""} >lastName</label>
                        <input 
                        type="text"
                        name="lastName"
                        placeholder="Enter Last Name..." 
                        onChange={(e)=>this.changeInput(e)}/>
                    </div>
                </div>

                <div className="inp-col">
                    <label className={error.email?"error_message":""}>Email</label>
                    <input 
                    type="email" 
                    name="email"
                    placeholder="Enter Email..." 
                    onChange={(e)=> this.changeInput(e)}/>
                </div>
         

                <div className="inp-row">
                    <div className="inp-r">
                        <label className={error.password?"error_message":""}>Password</label>
                        <input 
                        type="passWord"
                        name="password"
                        placeholder="Enter Password..." 
                        onChange={(e)=>this.changeInput(e)}/>
                    </div>
                    <div className="inp-r">
                        <label className={error.confirmpassword?"error_message":""}>Confirm Password</label>
                        <input 
                        type="password"
                        name="confirmpassword"
                        placeholder="Confirm password..." 
                        onChange={(e)=>this.changeInput(e)}/>
                    </div>
                </div>
                <button type="submit" disabled={this.state.disableSubbmit} onClick={this.handleSubmit}>Create Account</button>
            </form>
        </div>
        )
    }
};

export default Register;