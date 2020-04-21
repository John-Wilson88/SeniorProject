import React from 'react';
import ExerciseInput from '../ExerciseInput';
import axios from 'axios';

class NewWorkout extends React.Component {
    constructor(props) {
      super(props);
      this.state =  {
          workoutTitle: '',
          workoutType: '',
          workoutCategory: '',
          intensity: '',
          exercises: [{ex:'', reps:'', sets:''}]
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.addExercise = this.addExercise.bind(this);
      //this.deleteExercise = this.deleteExercise.bind(this);
      this.updateExercise = this.updateExercise.bind(this);

    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        let exArr = this.state.exercises;
        axios.post('/api/workout', {
            workoutTitle: this.state.workoutTitle,
            type: this.state.workoutType,
            category: this.state.workoutCategory,
            intensity: this.state.intensity,
            exercises: this.state.exercises
        }).then(res => {
            // console.log('DataSent' + res);
        });
    }

    addExercise(event) {
        this.setState((prevState) => ({
            exercises:[...prevState.exercises, {ex:'', reps:'', sets:''}],
        }));
        console.log(this.state.exercises);
    }

    updateExercise(event) {
        let i = event.target.id;
        if(i === -1) {
            console.log("i === -1");
        } else {
            this.setState({
                exercises: [
                    ...this.state.exercises.slice(0, i),
                    Object.assign({}, this.state.exercises[i], {[event.target.name]: event.target.value}),
                    ...this.state.exercises.slice(i+1)
                ]
            });
        }
    }

    // deleteExercise(event) {
    // }

    render() {
        return (
            <div>
                <br />
                <div className='row justify-content-center'>
                    <div className='col-md-10'>
                        <div className='card'>
                            <div className='card-body'>
                                <h3 className='card-title'>Create New Workout</h3>
                                <form onSubmit={this.handleSubmit}>
                                    <div className='form-row'>
                                        <div className='form-group col-md-12'>
                                            <label htmlFor='firstName'>Workout Title</label>
                                            <input type='text' className='form-control' name='workoutTitle' value={this.state.workoutTitle} onChange={this.handleChange}></input>
                                        </div>
                                    </div>
                                    
                                    <div className='form-row'>
                                        <div className='form-group col-md-12'>
                                            <label htmlFor='state'>Workout Type</label>
                                            <select className='form-control' name='workoutType' value={this.state.workoutType} onChange={this.handleChange}>
                                                <option value='none'>Choose a Workout Type</option>    
                                                <option value='aerobic'>Aerobic (Endurance)</option>    
                                                <option value='strength'>Strength</option>
                                                <option value='flexability'>Flexability</option>      
                                            </select>
                                        </div>
                                    </div>

                                    <div className='form-row'>
                                        <div className='form-group col-md-12'>
                                            <label htmlFor='state'>Workout Category</label>
                                            <select className='form-control' name='workoutCategory' value={this.state.workoutCategory} onChange={this.handleChange}>
                                                <option value='none'>Choose a Workout Type</option>    
                                                <option value='Split'>Split Workout</option>    
                                                <option value='Full Body'>Full Body Workout</option>     
                                            </select>
                                        </div>
                                    </div>

                                    <div className='form-row'>
                                        <div className='form-group col-md-12'>
                                            <label htmlFor='state'>Workout Intensity</label>
                                            <select className='form-control' name='intensity' value={this.state.intensity} onChange={this.handleChange}>
                                                <option value='none'>Choose a level of Intensity</option>    
                                                <option value='1'>1 (lowest amount of effort)</option>    
                                                <option value='2'>2</option>
                                                <option value='3'>3</option>
                                                <option value='4'>4</option>
                                                <option value='5'>5 (moderate amount of effort)</option>
                                                <option value='6'>6</option>
                                                <option value='7'>7</option>
                                                <option value='8'>8</option>
                                                <option value='9'>9</option>
                                                <option value='10'>10 (maximum amount of effort)</option>     
                                            </select>
                                        </div>
                                    </div>

                                    {
                                        this.state.exercises.map((val, index) => {
                                            let exId = `ex-${index + 1}`, repId = `rep-${index + 1}`, setId = `set-${index + 1}`, idx=index, value=this.state.exercises[idx], change=this.updateExercise;
                                            return (
                                                <ExerciseInput key={exId} exId={exId} repId={repId} setId={setId} value={value} change={change} idx={idx} />
                                            )
                                        })
                                    }

                                    <div className='form-row justify-content-end'>
                                        <button type="button" className="btn btn-dark" onClick={this.addExercise}>Add Exercise</button>
                                    </div>
                                    
                                    <br />

                                    <div className='form-row justify-content-center'>
                                        <button type='submit' className='btn btn-primary col-md-6' value='Submit'>Create Workout</button>
                                    </div>
        
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default NewWorkout;