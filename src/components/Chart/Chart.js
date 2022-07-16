import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const DataPointsValue = props.dataPoints.map((datapoint)=>datapoint.Value);
    const MaxExpenseValue = Math.max(...DataPointsValue);
    
    return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.Value}
          maxValue={MaxExpenseValue}
          label={dataPoint.label}
          

        />
        
      ))}
    </div>
  );
};

export default Chart;
