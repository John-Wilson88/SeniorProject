import React from 'react';

function LandingPage(props){
    
    return(
        <div className="row">
            <div className="col-md-12">
                <div className="row" >
                    <div className="col-md-12 jumbotron">
                        <div className="container">
                            <h1 className="display-4">Welcome to Tracker</h1>
                            <p className="lead">A neat way to create and track workouts!</p>
                        </div>
                    </div>
                </div>

                <br />

                <div className="row justify-content-center">
                    <div className="card">
                        <h5 className="card-header">Get Started</h5>
                        <div className="card-body">
                            <h5 className="card-title">Sign up and view</h5>
                            <p className="card-text">First time here? Sign up and start creating workouts!</p>
                            <p className="card-text">Or you can view current workouts.</p>
                            <a href="/newuser" className="btn btn-primary">Sign Up</a> <a href="/allworkouts" className="btn btn-primary">View Workouts</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;