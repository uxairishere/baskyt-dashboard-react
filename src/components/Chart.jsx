import React from 'react'
import ReactApexCharts from 'react-apexcharts'

const Chart = () => {
    var info = {

        series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        options: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: 'User statics',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            }
        },


    };
    return (
        <div>
            <div className='chart-wrapper'>
                <ReactApexCharts options={info.options} series={info.series} type="line" height={350} />
                <div className='row text-center'>
                <div className='col-md-4'>
                    <p>Weekly Users</p>
                    <h6>8210</h6>

                </div>
                <div className='col-md-4'>
                    <p>Monthly Users</p>
                    <h6>241894</h6>

                </div>
                <div className='col-md-4'>
                    <p>Trends</p>
                    <i class="bi bi-graph-up"></i>

                </div>
                </div>
            </div>
        </div>
    )
}

export default Chart