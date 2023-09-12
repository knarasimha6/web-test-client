import React from 'react';
import { Link } from "react-router-dom";


function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <div class="container-fluid">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Web Test Client</a>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/startorder">Start Order</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/postorder">Post Order</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header