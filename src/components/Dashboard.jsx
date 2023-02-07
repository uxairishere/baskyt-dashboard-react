import React, {useState, useEffect} from 'react'
import axios from "axios";
import Summery from './Summery'
import Chart from './Chart'
import TopUsers from './TopUsers'
import OrdersTable from './OrdersTable'
import { orders } from '../data/orders.data.js'
import { summerydata } from '../data/summery.data'

const Dashboard = () => {
    const [orderss, setOrders] = useState([]);
    async function GetOrders(){
        const response = await axios.post('http://localhost:5000/api/getorders');
        const summery = await response.data;
        setOrders(summery.orders ? summery.orders : null);
        console.log('SUMMERY REQUEST: ' + summery.status);
    }
    useEffect(() => {
        GetOrders()
    },[])
    return (
        <div className='dash-container'>
            <div className='dash-wrapper'>
                <div className='dash-top-wrapper row'>
                    <div>
                        <a href='/tqm' className='btn tqm-btn'>TQM</a>
                        <button className='btn filter-btn'>Fiter By</button>

                    </div>
                    <div className='col-md-6'>
                        <Summery summery={summerydata} />
                    </div>
                    <div className='col-md-6 chart-container'>
                        <Chart />
                    </div>
                </div>
                <div className='dast-mid-wrapper'>
                    <TopUsers />
                </div>
                <div className='dast-bottom-wrapper'>
                    <OrdersTable orders={orderss} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard