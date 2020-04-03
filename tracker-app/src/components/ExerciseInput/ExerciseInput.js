import React from 'react';

function ExerciseInput(props){

        return(
            <div className='form-row'>
                <div className='form-group col-md-6'>
                    <label htmlFor={props.exId}>Exercise</label>
                    <select className='form-control' name={props.exId} id={props.exId}>
                        <option value='none'>Choose an Exercise</option>    
                        <option value='push up'>Push Up</option>    
                        <option value='squat'>Squat</option>
                        <option value='sit up'>Sit Up</option>      
                    </select>
                </div>
    
                <div className='form-group col-md-3'>
                    <label htmlFor={props.repId}>Repetitions</label>
                    <select className='form-control' name='Repetitions' id={props.repId}>
                        <option value='none'>Number of Reps</option>    
                        <option value='1'>1</option>    
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                        <option value='10'>10</option>      
                    </select>
                </div>
    
                <div className='form-group col-md-3'>
                    <label htmlFor={props.setId}>Sets</label>
                    <select className='form-control' name='Sets' id={props.setId}>
                        <option value='none'>Number of Setss</option>    
                        <option value='1'>1</option>    
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                        <option value='10'>10</option>      
                    </select>
                </div>
            </div>
        );

}

export default ExerciseInput