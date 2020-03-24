import React from 'react';

function Navbar(props){
    
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">Tracker</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            {/* <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Features</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Pricing</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
                </ul>
            </div> */}
        </nav>
        // <nav class="navbar navbar-dark bg-dark">
        //      <a class="navbar-brand" href="#">Navbar</a>
        // </nav>
    );
};

export default Navbar;