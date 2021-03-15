import React, {useState} from 'react'
import "./input.css"
export default function Login() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [error, seterror] = useState(false)
    const [disableSubmit, setdisableSubmit] = useState(false)
const changeInput = (e) => {

    if(e.target.name === "password"){
setpassword(e.target.value)
    }
    if(e.target.name === "email"){
        setemail(e.target.value)
    }
    }
const validate = () => {
        let isValid = true;
     
          if (!email) {
            seterror(true);
            isValid = false;
          }
          if (!password) {
            seterror(true);
            isValid = false;
          }

          return isValid;
        }
    const handleSubmit = (e)=>{
        e.preventDefault();
            if(validate()){
            setdisableSubmit(false)
        }
        console.log("hellp from submitt");
    }
    return (
        <div className="pages-forms">
        <form className="log">
            <h1>Login</h1>
            <div className="inp-col">
                    <label className={error?"error_message":""}>Email</label>
                    <input 
                    type="email" 
                    name="email"
                    placeholder="Enter Email..." 
                    onChange={(e)=> changeInput(e)}/>
                </div>
                <div className="inp-col">
                        <label className={error?"error_message":""}>Password</label>
                        <input 
                        type="passWord"
                        name="passWord"
                        placeholder="Enter Password..." 
                        onChange={(e)=>changeInput(e)}/>
                    </div>
                    <button type="submit" disabled={disableSubmit} onClick={handleSubmit}>Login</button>

                    </form>
      </div>
    )
}
