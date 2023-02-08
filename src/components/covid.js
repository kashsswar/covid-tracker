import React, { useEffect, useState } from 'react'
import "./covid.css"


const Covid = () => {

    const [data, setData]= useState([]);
    
    const getCovidData=async()=>{
        try{
            const res=await fetch("https //api.covid19india.org/data.json");
            const actualData=await res.json();
            //console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        }
        catch(err){
            throw err;
        }
        }
    
    useEffect(()=>{
    getCovidData();
  });
  return (
    <>
    <section>
      <h1>🔴 Live</h1>
      <h2>LIVE COVID-19 TRACKER</h2>
    <div className='row'>
      <div className='col-sm-4'>
        <ul className='card'>
            <li className='card_main'>
                <div className='card_inner'>
                    <p className='card_name'><span>Our</span>Country</p>
                    <p className='card_total_card-small'>INDIA</p>
             </div>
            </li>
            <li className='card_main'>
                <div className='card_inner'>
                    <p className='card_name'><span>Total</span>Recovered</p>
                    <p className='card_total_card-small'>[data.recovered]</p>
                </div>
            </li>
            <li className='card_main'>
                <div className='card_inner'>
                    <p className='card_name'><span>Total</span>Confirmed</p>
                    <p className='card_total_card-small'>[data.confirmed]</p>
                </div>
            </li>
            <li className='card_main'>
                <div className='card_inner'>
                    <p className='card_name'><span>Total</span>Death</p>
                    <p className='card_total_card-small'>[data.deaths]</p>
                </div>
            </li>
            <li className='card_main'>
                <div className='card_inner'>
                    <p className='card_name'><span>Total</span>Active</p>
                    <p className='card_total_card-small'>[data.active]</p>
                </div>
            </li>
            <li className='card_main'>
                <div className='card_inner'>
                    <p className='card_name'><span>Last</span>Updated</p>
                    <p className='card_total_card-small'>[data.updated]</p>
                </div>
            </li>
      </ul>
    </div>
    </div>
    </section>
    </>
  )
}

export default Covid
