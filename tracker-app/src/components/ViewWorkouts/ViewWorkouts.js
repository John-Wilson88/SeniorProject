import React from 'react';
import axios from 'axios';
import WorkoutCard from '../WorkoutCard';

class ViewWorkouts extends React.Component {

    constructor(props) {
      super(props);
      this.state =  {
          exercises: []
      };
      this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        const getWorkouts = () => {
            try {
                return axios.get('/api/workouts');
            } catch(err) {
                console.log(err);
            }
        }

        const logWorkouts = async () =>{
            const workouts = getWorkouts().then(response => {
                if(response.data) {
                    this.setState({exercises: response.data});
                }
            }).catch(err => {
                console.log(err);
            })
        }

        logWorkouts();
    }


    render() {
        return(
            <div>
                <br />
                <div className="row row-cols-1 row-cols-md-3">
                    {
                        this.state.exercises.reverse().map((val, index) => {
                            let exObj = val, exId = `ex-${index + 1}`, dropId = `exGroup${index +1}`, dataDropId = `#exGroup${index +1}`, modalId = `exResult${index +1}`, dataModalId = `#exResult${index +1}`; 
                            return (
                                <WorkoutCard key={exId} exId={exId} dropId={dropId} dataDropId={dataDropId} modalId={modalId} dataModalId={dataModalId} workoutId={exObj.workoutId} exTitle={exObj.workoutTitle} exType={exObj.type} exCategory={exObj.category} exIntensity={exObj.intensity} exercises={exObj.exercises} />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
};

export default ViewWorkouts;