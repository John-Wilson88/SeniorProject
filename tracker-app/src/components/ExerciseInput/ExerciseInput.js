import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ExerciseInput(props){

        return(
            <div className='form-row'>
{/* 
                <div className='form-group col-md-1'>
                    <button type="button" className="btn btn-danger" onClick={props.deleteExercise}><FontAwesomeIcon icon={['fab', 'minus-square']} /></button>
                </div> 
*/}

                <div className='form-group col-md-6'>
                    <label htmlFor={props.exId}>Exercise</label>
                    <select className='form-control' name='ex' id={props.idx} value={props.value.ex} onChange={props.change}>
                        <option value='none'>Choose an Exercise</option>    
                        <option value='push up'>Push Up</option> 
                        <option value='pull up'>Pull Up</option>      
                        <option value='dips'>Dips</option>                              
                        <option value='squat'>Squat</option>
                        <option value='lunges'>Lunges</option>      
                        <option value='single leg rdl'>Single Leg RDL</option>      
                        <option value='sit up'>Sit Up</option>
                        <option value='v up'>V Up</option>      
                        <option value='plank'>Plank</option>      
                        <option value='run'>Run</option>      
                        <option value='bike'>Bike</option>      
                        <option value='swim'>Swim</option>      
                    </select>
                </div>
    
                <div className='form-group col-md-3'>
                    <label htmlFor={props.repId}>Repetitions</label>
                    <select className='form-control' name='reps' id={props.idx} value={props.value.reps} onChange={props.change}>
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
                    <select className='form-control' name='sets' id={props.idx} value={props.value.sets} onChange={props.change}>
                        <option value='none'>Number of Sets</option>    
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

export default ExerciseInput;