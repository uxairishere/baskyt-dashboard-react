import React from 'react'

const OrdersTable = () => {
    var orders = [
        {
            order_number: 1,
            type: 'squad',
            customer: "John Doe",
            zip_code: 46000,
            order_time: '3:12 PM',
            vendors: '',
            rider: 'Bill Cohen',
            order_amount: 144,
            performance: 'poor',
            address: 'Morgah, Rawalpindi',
            phone: '+923085100827',
            img: require('../assets/profile.jpg')
        },
        {
            order_number: 1,
            type: 'normal',
            customer: "John Doe",
            zip_code: 46000,
            order_time: '3:12 PM',
            vendors: '',
            rider: 'Bill Cohen',
            order_amount: 144,
            performance: 'good',
            address: 'Morgah, Rawalpindi',
            phone: '+923085100827',
            img: require('../assets/profile.jpg')
        }, 
        {
            order_number: 1,
            type: 'squad',
            customer: "John Doe",
            zip_code: 46000,
            order_time: '3:12 PM',
            vendors: '',
            rider: 'Bill Cohen',
            order_amount: 144,
            performance: 'top',
            address: 'Morgah, Rawalpindi',
            phone: '+923085100827',
            img: require('../assets/profile.jpg')
        },
        {
            order_number: 1,
            type: 'squad',
            customer: "John Doe",
            zip_code: 46000,
            order_time: '3:12 PM',
            vendors: '',
            rider: 'Bill Cohen',
            order_amount: 144,
            performance: 'poor',
            address: 'Morgah, Rawalpindi',
            phone: '+923085100827',
            img: require('../assets/profile.jpg')
        },
        {
            order_number: 1,
            type: 'squad',
            customer: "John Doe",
            zip_code: 46000,
            order_time: '3:12 PM',
            vendors: '',
            rider: 'Bill Cohen',
            order_amount: 144,
            performance: 'good',
            address: 'Morgah, Rawalpindi',
            phone: '+923085100827',
            img: require('../assets/profile.jpg')
        },
        {
            order_number: 1,
            type: 'squad',
            customer: "John Doe",
            zip_code: 46000,
            order_time: '3:12 PM',
            vendors: '',
            rider: 'Bill Cohen',
            order_amount: 144,
            performance: 'top',
            address: 'Morgah, Rawalpindi',
            phone: '+923085100827',
            img: require('../assets/profile.jpg')
        },  
    ]
    return (
        <div className='orders-container'>
            <h5>Active Orders</h5>
            <div className='orders-wrapper'>
                <div class="table-responsive-md">
                    <table className="table">
                        <tr>
                            <th scope="col">Type</th>
                            <th scope="col">Order#</th>
                            <th scope="col">Customer</th>
                            <th scope="col">Zip Code</th>
                            <th scope="col">Order Time</th>
                            <th scope="col">Vendors</th>
                            <th scope="col">Rider</th>
                            <th scope="col">Order Amount</th>
                            <th scope="col">Performance</th>

                        </tr>
                        {orders.map((val, index) => (
                            <tr>
                                {val.type == 'squad' ?
                                    <td scope="row">
                                        <div className='squad' style={{ backgroundColor: '#FFF27B', color: '#809900', padding: '0.5rem 1rem', width: 'fit-content' }}>
                                            {val.type}
                                        </div>
                                    </td>
                                    :
                                    <td scope="row">
                                        <div className='normal' style={{ backgroundColor: '#FFAFB1', color: '#E9000B', padding: '0.5rem 1rem', width: 'fit-content' }}>
                                            {val.type}
                                        </div>
                                    </td>
                                }
                                <td>{val.order_number}</td>
                                <td>
                                    <div className='row customer-cell'>
                                        <div className='col-3'>
                                            <img src={val.img} alt="..."/>
                                        </div>
                                        <div className='col-9'>
                                            <h1>{val.customer}</h1>
                                            <p>{val.address}</p>
                                            <p>{val.phone}</p>

                                        </div>
                                    </div>
                                </td>
                                <td>{val.zip_code}</td>
                                <td>{val.order_time}</td>
                                <td>{val.vendors}</td>
                                <td>{val.rider}</td>
                                <td>
                                    <span className='amount-cell' style={{backgroundColor: '#82F89D',padding: '0.5rem 1.5rem'}}>
                                        $ {val.order_amount}
                                    </span>
                                </td>
                                {val.performance === 'good' ?
                                    <td><i class="bi bi-emoji-smile-fill" style={{color: '#46C864'}}></i></td>
                                :
                                val.performance === 'top' ?
                                    <td><i class="bi text-warning bi-star-fill"></i></td>
                                :
                                val.performance === 'poor' ?
                                    <td><i class="bi bi-exclamation-circle-fill" style={{color: '#E81D11'}}></i></td>
                                : null
                                }
                            </tr>
                        ))
                        }
                    </table>
                </div>
            </div>
        </div>
    )
}

export default OrdersTable