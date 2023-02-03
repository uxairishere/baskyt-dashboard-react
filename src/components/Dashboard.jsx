import React from 'react'
import Summery from './Summery'
import Chart from './Chart'
import TopUsers from './TopUsers'
import OrdersTable from './OrdersTable'
import {orders} from '../data/orders.data.js'
import { summery } from '../data/summery.data'

const Dashboard = () => {
    return (
        <div className='dash-container'>
            <div className='dash-wrapper'>
                <div className='dash-top-wrapper row'>
                    <div>
                        <a href='/tqm' className='btn tqm-btn'>TQM</a>
                        <button className='btn filter-btn'>Fiter By</button>

                    </div>
                    <div className='col-6'>
                        <Summery summery={summery}/>
                    </div>
                    <div className='col-6'>
                        <Chart />
                    </div>
                </div>
                <div className='dast-mid-wrapper'>
                <TopUsers/>
                </div>
                <div className='dast-bottom-wrapper'>
                <OrdersTable orders={orders}s/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard