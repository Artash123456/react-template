import React from 'react';
// charts from reaviz
import { BarChart } from 'reaviz';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
  } from "recharts";
  import { PieChart } from 'reaviz';

//data from json file
import data from "./charts.json"




const databar = data.data.databar
const diagram = data.data.diagram
const dataarea = data.data.dataarea

const ChartBar = () => (
  <div style={{ marginTop: '30px', textAlign: 'center' }}>
    <BarChart width={350} height={250} data={databar} />
  </div>
);
const ChartArea = () => {
    return (
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            data={dataarea}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="pv" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
  const ChartPie = () => (
    <div>
      <PieChart width={250} height={250} data={diagram} />
    </div>
  );

  const ChartDiagram =() => (
    <div>
      <AreaChart width={350} height={250} data={dataarea} />
    </div>
  );


  export {ChartArea, ChartPie, ChartBar, ChartDiagram}