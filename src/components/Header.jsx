import React from 'react'
import profile2 from '../assets/profile2.jpg'

const Header = () => {
    return (
        <div>
            <nav class="navbar header navbar-dark header-main" aria-label="First navbar example">
                <div class="container-fluid header-fluid">
                    <a class="navbar-brand text-center" href="#">
                        <i class="bi bi-basket2"></i>
                        <p>Baskyt&#8482;</p>
                    </a>
                    <button class="navbar-toggler nav-toggle-button collapsed me-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <a class="navbar-brand" href="#"><i class="bi bi-search"></i></a>
                    <a class="navbar-brand" href="#"><img src={profile2} alt="..."/></a>


                    <div class="navbar-collapse collapse header-collapase" id="navbarsExample01">
                        <ul class="navbar-nav me-auto mb-2">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Dashboard</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-danger">TQM</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">More</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form role="search">
                            <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header