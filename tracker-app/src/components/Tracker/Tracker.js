import React from 'react';
import Navbar from '../Navbar';
import NewUser from '../NewUser';
import NewWorkout from '../NewWorkout';


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

                     <NewUser /> 

                    <br />

                    <NewWorkout />

                </div>


            </div>
        )
    }

};

export default Tracker;