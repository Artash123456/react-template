import React, {useContext} from 'react'
import {SuperContext} from "../../../context"
import {ChartArea, ChartPie, ChartBar} from "./charts/Charts"
import "../../index.scss"
export default function Charts() {
    const context = useContext(SuperContext)
    const {isOpen} = context
    return (
        <div className={isOpen?"charts-from-left-menu":"had"}>
            <ChartArea/>
            <ChartPie/>
            <ChartBar/>
            
        </div>
    )
}
