import React from 'react';
import axios from 'axios';

class NewWorkout extends React.Component {
    constructor(props) {
      super(props);
      this.state =  {
          workoutTitle: '',
          workoutType: '',
          workoutCategory: '',
          intensity: '',
          exercises: []
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }


    render() {
        return (
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
    
                                <div className='form-row justify-content-center'>
                                    <button type='submit' className='btn btn-primary col-md-6' value='Submit'>Create Workout</button>
                                </div>
    
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default NewWorkout;