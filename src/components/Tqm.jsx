import React, {useState} from 'react'
import tqmlogo1 from '../assets/tqmlogo1.png'
import tqmlogo2 from '../assets/tqmlogo2.png'
import tqmlogo3 from '../assets/tqmlogo3.png'
import tqmlogo4 from '../assets/tqmlogo4.png'
import tqmlogo5 from '../assets/tqmlogo5.png'


const Tqm = () => {
    const [date, setDate] = useState();
    return (
        <div className='tqm-container'>
            <div className='text-center'>
                <button className='tqm-quality-btn btn'>Quality</button>
                <button className='tqm-performance-btn btn'>Performance</button>
                <button className='btn btn-dark tqm-edit-btn'><i class="bi bi-pencil-fill"></i></button>
            </div>
            <div className='search-container'>
                <div class="input-group search-wrapper">
                    {/* <button className='btn btn-dark qtm-calendar-btn'><i class="bi bi-calendar3"></i></button> */}
                    {/* date picker  */}
                        <div class="date-container">
                            <input class="date-input bg-dark"  type="date" name="selected_date" onChange={e => setDate(e.target.value)} />
                            <span className='date-btn'><i class="bi bi-calendar3"></i></span>
                        </div>

                    <input type="text" class="form-control" value={date} placeholder="Search Vendor/Rider" />
                    <div class="input-group-append">
                        <button class="btn " type="button">
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            </div>
            <h1>Company Insights</h1>
            <div className='tqm-wrapper'>
                {/* child  */}
                <div className='tqm-child'>
                    <img src={tqmlogo1} alt='loading...' />
                    <h1>Order Acceptance</h1>
                    <p>85%</p>
                    <button className='btn tqm-btn-1'>Phase 1 Goal</button>
                </div>
                {/* child  */}
                <div className='tqm-child'>
                    <img src={tqmlogo2} alt='loading...' />
                    <h1>Order Acceptance</h1>
                    <p>85%</p>
                    <button className='btn tqm-btn-2'>Phase 1 Goal</button>
                </div>
                {/* child  */}
                <div className='tqm-child'>
                    <img src={tqmlogo3} alt='loading...' />
                    <h1>Order Acceptance</h1>
                    <p>85%</p>
                    <button className='btn tqm-btn-3'>Phase 1 Goal</button>
                </div>
                {/* child  */}
                <div className='tqm-child'>
                    <img src={tqmlogo4} alt='loading...' />
                    <h1>Order Acceptance</h1>
                    <p>85%</p>
                    <button className='btn tqm-btn-4'>Phase 1 Goal</button>
                </div>
                {/* child  */}
                <div className='tqm-child'>
                    <img src={tqmlogo5} alt='loading...' />
                    <h1>Order Acceptance</h1>
                    <p>85%</p>
                    <button className='btn tqm-btn-5'>Phase 1 Goal</button>
                </div>
            </div>
        </div>
    )
}

export default Tqm