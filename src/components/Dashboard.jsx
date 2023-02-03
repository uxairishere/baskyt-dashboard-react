import React from 'react'
import Summery from './Summery'
import Chart from './Chart'
import TopUsers from './TopUsers'
import OrdersTable from './OrdersTable'

const Dashboard = () => {
    return (
        <div className='dash-container'>
            <div className='dash-wrapper'>
                <div className='dash-top-wrapper row'>
                    <div>
                        <button className='btn tqm-btn'>TQM</button>
                        <button className='btn filter-btn'>Fiter By</button>

                    </div>
                    <div className='col-6'>
                        <Summery />
                    </div>
                    <div className='col-6'>
                        <Chart />
                    </div>
                </div>
                <div className='dast-mid-wrapper'>
                <TopUsers/>
                </div>
                <div className='dast-bottom-wrapper'>
                <OrdersTable/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard