import React from 'react';
import { Router } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './Tracker.css'
// import NewUser from '../NewUser';
// import NewWorkout from '../NewWorkout';
// import ViewWorkouts from '../ViewWorkouts';
import history from '../../services/history';
import Routes from '../../routes';

class Tracker extends React.Component {
    // constructor(props) {
    //   super(props);
    //   this.state =  {};
    //}
    

    render() {
        return(
            <div>  
                <Navbar />
                <div className='container'>
                    <br /> 
                    <br />
                    <br />
                    <Router history={history} >
                        <Routes />
                    </Router>
                </div>
                <Footer />
            </div>
        )
    }

};

export default Tracker;