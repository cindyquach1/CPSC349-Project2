import React,{useState, useEffect} from 'react';  
import { fetchDailyData } from '../../API';  
import { Line, Bar } from 'react-chartjs-2';  
import styles from './Chart.module.css';

const Chart = ({data:{confirmed, recovered, deaths}, country}) => {  
    //this is a set representation with setter method of a state  
    const [dailyData, setDailyData] = useState([]);  
      
    useEffect(() => {  
    const fetchAPI = async()=>{  
        setDailyData(await fetchDailyData());
        }  
        fetchAPI();  
    },[]);

const lineChart =(  
    dailyData.length ? (
        <Line data={{
                        labels: dailyData.map(({date}) =>  date),  
                        datasets :[{  
                            data :  dailyData.map(({confirmed}) =>  confirmed),  
                            label: 'Confirmed',
                            borderColor: 'rgba(214, 69, 65, 1)',
                            fill: true,
                        },
                        {
                            data :  dailyData.map(({deaths}) =>  deaths),  
                            label: 'Deaths',
                            borderColor: 'blue',
                            backgroundColor: 'rgba(46, 49, 49, 1)',
                            fill: true,  
                        }]  
                    }}  
                    options={ {  
                        scales : { xAxes : [ { gridLines : { display : false } } ], yAxes : [ { gridLines : { display : false } } ] }  
                    } }  
                    />):null
                    );  
  
const BarChart  =(  
       confirmed?(  
        <Bar  
        data={{  
            labels: ['Confirmed', 'Active', 'Recovered', 'Deaths'],  
            datasets:[{  
                label:'People',  
                backgroundColor:['rgba(214, 69, 65, 1)', 'rgba(248, 148, 6, 1)', 'rgba(42, 187, 155, 1)', 'rgba(46, 49, 49, 1)' ],  
                data:[confirmed.value, confirmed.value - recovered.value - deaths.value, recovered.value, deaths.value]  
            }]  
        }}  
        options={{  
            legend:{display:false},  
            title: {display:true, text:`current state in ${country}`}  
        }}  
        />             
        ): null  
    )  
    return (  
     <div className={styles.container}>  
         {country? BarChart : lineChart}  
     </div>  
    )  
}  
export default Chart; 