import React from 'react'
import payment from '../assets/payment.svg'
import bonus from '../assets/bonus.svg'


const Sidebar = () => {
    return (
        <div class="d-flex flex-column flex-shrink-0 bg-dark" style={{ width: '4.5rem', height: '95rem', float: 'left' }}>
            <ul class="nav nav-pills sidebar-icons nav-flush flex-column mb-auto text-center">
                <li class="nav-item">
                    <a href="#" class="nav-link text-danger rounded-0" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Home" data-bs-original-title="Home">
                        <i class="bi bi-house home"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link   rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard" data-bs-original-title="Dashboard">
                        <i class="bi bi-journals"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link   rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Orders" data-bs-original-title="Orders">
                        <i class="bi bi-stack"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link   rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Products" data-bs-original-title="Products">
                        <i class="bi bi-person-square"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link   rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Products" data-bs-original-title="Products">
                        <i class="bi bi-shop-window"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link   rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Products" data-bs-original-title="Products">
                        <i class="bi bi-box-seam"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link   rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Products" data-bs-original-title="Products">
                        <i class="bi bi-percent"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link   rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Products" data-bs-original-title="Products">
                        <img src={payment} alt="some" />

                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link   rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Products" data-bs-original-title="Products">
                        <i class="bi bi-bell"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link   rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Products" data-bs-original-title="Products">
                        {/* <i class="bi bi-award"></i> */}
                        <img src={bonus} alt="some" />

                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link   rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Customers" data-bs-original-title="Customers">
                        <i class="bi bi-headset"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link   rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Customers" data-bs-original-title="Customers">
                        <i class="bi bi-list-task"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link   rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Customers" data-bs-original-title="Customers">
                        <i class="bi bi-people"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar