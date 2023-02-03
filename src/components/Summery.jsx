import React from 'react'
import revenue from '../assets/revenue.svg'

const Summery = () => {
    return (
        <div className='summary-container'>
            <div className='summary-wrapper row'>
                <div className='summary-child grid'>
                    <i className='bi bi-people-fill'></i>
                    <span>CUSTOMERS</span>
                    <h2>13424</h2>
                </div>
                <div className='summary-child grid'>
                    <i className='bi bi-basket3-fill'></i>
                    <span>ORDERS</span>
                    <h2>13424</h2>
                </div>
                <div className='summary-child grid'>
                    <i className='bi bi-car-front-fill'></i>
                    <span>DELIVERY</span>
                    <h2>13424</h2>
                </div>
                <div className='summary-child grid'>
                    <i className='bi bi-shield-fill-check'></i>
                    <span>USERS</span>
                    <h2>13424</h2>
                </div>
                <div className='summary-child grid'>
                    <img src={revenue} style={{ width: '2rem' }} />
                    <span>REVENUE</span>
                    <h2>13424</h2>
                </div>
                <div className='summary-child grid'>
                    <i className='bi bi-star-fill'></i>
                    <span>AVG RATING</span>
                    <h2>13424</h2>
                </div>
                <div className='summary-child grid'>
                    <img src={revenue} style={{ width: '2rem' }} />
                    <span>AVG REVENUE<br />PER CUSTOMER</span>
                    <h2>13424</h2>
                </div>
                <div className='summary-child grid'>
                    <img src={revenue} style={{ width: '2rem' }} />
                    <span>AVG REVENUE<br />PER USER</span>
                    <h2>13424</h2>
                </div>
            </div>
        </div>
    )
}

export default Summery