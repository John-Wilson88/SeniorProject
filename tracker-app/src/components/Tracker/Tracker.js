import React from 'react';
import Navbar from '../Navbar';
import NewUser from '../NewUser';

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

                </div>


            </div>
        )
    }

};

export default Tracker;