import React, {useContext} from 'react'
import {SuperContext} from "../../../context"
import "../../index.scss"
import Tables from "./Tables"
import {ChartArea, ChartBar} from "./charts/Charts"

// react icons
import {AiOutlineAreaChart} from "react-icons/ai"
import {FaChartBar} from "react-icons/fa"



export default function Dashboard() {
    const context = useContext(SuperContext)
    const {isOpen} = context
  const  cards=[
        {id:1, name:"Primary Card", color:"#007bff"},
        {id:3, name:"Warning Card", color:"#ffc107"},
        {id:2, name:"Success Card", color:"#28a745"},
        {id:4, name:"Danger Card", color:"#dc3545"},
    ]


    return (
            <div className={!isOpen?"dashboard han":"dashboard"}>
                <div className="dashboard-grey-line">
                    <h1>Dashboard</h1>
                    <h3>Dashboard</h3>
                </div>
                    <div className="cards">
                            {cards.map(elem =>{
                        return <div key={elem.id} className="card" style={{background:`${elem.color}`}}>
                                    <h1>{elem.name}</h1>
                                    <label/>
                                    <h3>view details</h3>
                                </div>
                            })}
                        </div>
                        <div className="chart-area">
                            <div className="a-chart">
                            <h2 className="h2-class"><AiOutlineAreaChart/>Area Chart Example</h2>
                            <ChartArea/>
                            </div>
                                <div className="a-chart">
                                <h2 className="h2-class"><FaChartBar/> Bar Chart Example</h2>
                            <ChartBar/>
                        </div>
                    </div>
            <Tables/>             
        </div>        
    )
}
    
    




