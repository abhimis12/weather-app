import React,{Component} from 'react';
import { useEffect } from 'react';
import Chart from "react-apexcharts";
import { useSelector } from 'react-redux';
import "../css/graph.css";


const Graph = ( ) => {
    const data=useSelector((store)=>
  store.temp

  )
  const temp=useSelector((store)=>
  store.day

  ) 

//  console.log(data)

 useEffect(()=>{
    
 },[data])
 
 const Gra=()=>{
    return <><Charts temp={data}/></>
 }

  return (
    <div  className='graph3'>
       <div className='graph1'>
       {temp && <p>{Math.round(temp[0] - 273)}°C</p>}
       {temp && <img
                style={{
            
                 
                  width: "150px",
                }}
                src={
                  temp[0] === "Clear"
                    ? "https://st.depositphotos.com/1007168/1249/i/950/depositphotos_12492703-stock-photo-summer-hot-sun.jpg"
                    : temp[0] === "Clouds"
                    ? "https://www.freeiconspng.com/thumbs/cloud-icon/cloud-icon-8.png"
                    : "https://png.pngtree.com/png-vector/20190719/ourlarge/pngtree-rain-icon-png-image_1558221.jpg"
                }
              />}
       </div>

         {data && <Gra/> }</div>

  )
}

export default Graph

class Charts extends Component {
    constructor(props) {
      super(props);
      this.state = {
        options: {
          chart: {
            id: "area",
          },
          stroke: {
            curve: "smooth",
          },
          xaxis: {
            categories: ["Morning", "Day", "Evening", "Night"],
          },
          dataLabels: {
            enabled: false,
          },
        },
        series: [
          {
            name: "Temp(°F)",
            data: props.temp,
          },
        ],
      };
    }
  
    render() {
      return (
        <div style={{ width: "100%" }}>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="area"
            width="100%"
            height="300px"
          />
        </div>
      );
    }
  }