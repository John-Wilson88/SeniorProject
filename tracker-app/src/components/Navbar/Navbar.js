import React from 'react';

function Navbar(props){
    
    return(
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href='/'>Tracker</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href='/allworkouts'> Workouts </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='/createworkout'> Create Workout</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='/newuser'>Sign Up</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;