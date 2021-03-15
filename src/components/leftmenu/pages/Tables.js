import React, {useState, useContext} from 'react'
import {BiTable} from "react-icons/bi"
import {SuperContext} from "../../../context"
import "../../index.scss"

export default function Tables(props) {
    const context = useContext(SuperContext)
    const {users, isOpen} = context
    const [count, setcount] = useState(10)
    const [user, setuser] = useState(null)
    const someF = (e) => {
        return   setcount(e.target.value)
    }
   const filterByName = (e)=>{
        let  value = e.target.value
        let ind = users.map(elem=>elem.name).map((elem,i)=>elem.startsWith(value)).indexOf(true)
        let id = users.map(elem=>elem.id).find((e, index)=>e === ind+1)
        if(value !== ""){
   return setuser(id)
        }else{
            return setuser(null) ;
        }   
    }
    return (
            <div className="table">
            <h2 className="h2-class"><BiTable/>DataTable Example</h2>
    <div className="heading-for-table">
        <div>
            Show 
            <select onChange={(e)=>someF(e)}>
                <option>10</option>
                <option>5</option>
            </select>
            Entries

            </div>
            <div>
                Search: <input placeholder="Search by name..." onChange={(e)=>filterByName(e)}/>
            </div>
        </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>City</th>
                    </tr>
                </thead>
                {user === undefined
                ?
                <h1>cannot find user</h1>
                :    
                users.filter((elem,index)=>index<count && (user?elem.id===user:elem)).map((elem, index)=>{
                     return( 
                       <tbody key = {index}>
                        <tr>
                           <td>{elem.name}</td>
                           <td>{elem.phone}</td>
                           <td>{elem.email}</td>
                           <td>{elem.address.city}</td>
                       </tr> 
                       </tbody>  
                    )})}
                <tfoot>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>City</th>
                    </tr>   
                </tfoot>
            </table>
    </div>
    )
}


