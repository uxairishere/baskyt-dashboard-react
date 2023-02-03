import React from 'react'

const TopUsers = () => {
    var user = {
        img: require('../assets/profile2.jpg'),
        name: 'Uzair Abbas',
        revenue: '13416.80',
        rev_status: '12%',
        total_spent: '49137',
        month_orders: '182'
    }
    return (
        <div className='top-container'>
            <div className='top-wrapper'>
            {/* CARD */}
                <div className='top-child'>
                    <div className='top-tag'>Top Customer</div>
                    <div className='top-child-wrapper'>
                        <div className='row'>
                            <div className='col-6'>
                                <img src={user.img} alt='profile image' />
                                <p className='top-name'>{user.name}</p>
                                <div className='top-r-container'>
                                    <p className='top-r-tag'>REVENUE / MONTH</p>
                                    <p className='top-r'>$ {user.revenue}</p>
                                </div>
                            </div>
                            <div className='col-6'>
                                <h1>$ {user.total_spent}</h1>
                                <p className='top-r-tag' style={{ margin: '1.3rem 0 0 0' }}>PROCESSED ORDERS / MONTH</p>
                                <p className='top-r'>$ {user.revenue}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* CARD */}
                <div className='top-child'>
                    <div className='top-tag'>Top Rider</div>
                    <div className='top-child-wrapper'>
                        <div className='row'>
                            <div className='col-6'>
                                <img src={user.img} alt='profile image' />
                                <p className='top-name'>{user.name}</p>
                                <div className='top-r-container'>
                                    <p className='top-r-tag'>REVENUE / MONTH</p>
                                    <p className='top-r'>$ {user.revenue}</p>
                                </div>
                            </div>
                            <div className='col-6'>
                                <h1>$ {user.total_spent}</h1>
                                <p className='top-r-tag' style={{ margin: '1.3rem 0 0 0' }}>PROCESSED ORDERS / MONTH</p>
                                <p className='top-r'>$ {user.revenue}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* CARD */}
                <div className='top-child'>
                    <div className='top-tag'>Top Rider</div>
                    <div className='top-child-wrapper'>
                        <div className='row'>
                            <div className='col-6'>
                                <img src={user.img} alt='profile image' />
                                <p className='top-name'>{user.name}</p>
                                <div className='top-r-container'>
                                    <p className='top-r-tag'>REVENUE / MONTH</p>
                                    <p className='top-r'>$ {user.revenue}</p>
                                </div>
                            </div>
                            <div className='col-6'>
                                <h1>$ {user.total_spent}</h1>
                                <p className='top-r-tag' style={{ margin: '1.3rem 0 0 0' }}>PROCESSED ORDERS / MONTH</p>
                                <p className='top-r'>$ {user.revenue}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TopUsers