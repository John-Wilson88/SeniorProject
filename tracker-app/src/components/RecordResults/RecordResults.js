import React from 'react';
import axios from 'axios';

class RecordResults extends React.Component {
    constructor(props) {
      super(props);
      this.state =  {
          difficulty: '',
          comments: '',
          workoutId: '1e6ffcb0-8341-11ea-a2ae-317c4489e43a'
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post('/api/recordresult', {
            workoutId: this.state.workoutId,
            difficulty: this.state.difficulty,
            comments: this.state.comments
        }).then(res => {
            console.log('DataSent' + res);
        });
    }


    render() {
        return (
            <div>
                <br />
                <div className='row justify-content-center'>
                    <div className='col-md-10'>
                        <div className='card'>
                            <div className='card-body'>
                                <h3 className='card-title'>Record Results</h3>
                                <form onSubmit={this.handleSubmit}>                                                                    
                                    <div className='form-row'>
                                        <div className='form-group col-md-12'>
                                            <label htmlFor='state'>Workout Difficulty</label>
                                            <select className='form-control' name='difficulty' value={this.state.difficulty} onChange={this.handleChange}>
                                                <option value='none'>Choose a level of Intensity</option>    
                                                <option value='1'>1 (lowest amount of difficulty)</option>    
                                                <option value='2'>2</option>
                                                <option value='3'>3</option>
                                                <option value='4'>4</option>
                                                <option value='5'>5 (moderate amount of difficulty)</option>
                                                <option value='6'>6</option>
                                                <option value='7'>7</option>
                                                <option value='8'>8</option>
                                                <option value='9'>9</option>
                                                <option value='10'>10 (maximum amount of difficulty)</option>     
                                            </select>
                                        </div>
                                    </div>

                                    <div className='form-row'>
                                        <div className='form-group col-md-12'>
                                            <label htmlFor='comments'>Personal Comments</label>
                                            <textarea type='text' className='form-control' name='comments' value={this.state.comments} onChange={this.handleChange}></textarea>
                                        </div>
                                    </div>

                                    <div className='form-row justify-content-center'>
                                        <button type='submit' className='btn btn-primary col-md-6' value='Submit'>Record Result</button>
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

export default RecordResults;