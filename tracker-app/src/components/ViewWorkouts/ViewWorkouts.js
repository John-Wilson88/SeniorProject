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
                    console.log(response.data)
                    this.setState({exercises: response.data});
                }
            }).catch(err => {
                console.log(err);
            })
        }

        logWorkouts();
        console.log(this.state.exercises);
    }


    render() {
        return(
            <div>


            {
                this.state.exercises.map((val, index) => {
                    let exObj = val, exId = `ex-${index + 1}`; 
                    return (
                        <WorkoutCard key={exId} exTitle={exObj.workoutTitle} exType={exObj.typeTitle} exCategory={exObj.categoryTitle} exIntensity={exObj.intensity} />
                    )
                })
            }


                <WorkoutCard />
                
            </div>
        );
    }
};

export default ViewWorkouts;