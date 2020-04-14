import React from 'react';
import Navbar from '../Navbar';
import NewUser from '../NewUser';
import NewWorkout from '../NewWorkout';
import ViewWorkouts from '../ViewWorkouts';


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

                     {/* <NewUser />  */}

                    <br />

                    <NewWorkout />

                    <br />

                    <ViewWorkouts />

                </div>


            </div>
        )
    }

};

export default Tracker;