import React from 'react';
import axios from 'axios';

class RecordResults extends React.Component {
    constructor(props) {
      super(props);
      this.state =  {
          difficulty: '',
          comments: '',
          workoutId: props.workoutId
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

                <button type="button" class="btn btn-primary" data-toggle="modal" data-target={this.props.modalTargetId}>Record Results</button>

                <div class="modal fade" id={this.props.modalTarget} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Record Results</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
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
                            <button type='submit' className='btn btn-primary col-md-6' value='Submit'>Submit Result</button>
                        </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>

            </div>
        )
    }


}

export default RecordResults;



