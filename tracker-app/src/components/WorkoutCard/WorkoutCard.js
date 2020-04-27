import React from 'react';
import RecordResults from '../RecordResults';

function WorkoutCard(props){

        return(
            <div className="col-md-4 mb-4" id={props.exId}>
                <div className="card card bg-light mb-3">
                    <div className="card-header">
                        {props.exTitle}
                    </div>
                    <div className="card-body">
                        <h6 className="card-title">Workout Type: {props.exType}</h6>
                        <h6 className="card-title">Workout Category: {props.exCategory}</h6>
                        <h6 className="card-title">Workout Intensity: {props.exIntensity}</h6>
                    </div>
                    <button className="btn btn-light" type="button" data-toggle="collapse" data-target={props.dataDropId} aria-expanded="false" aria-controls="collapseExample">
                        View Workout Details
                    </button>
                    <div className="collapse" id={props.dropId}>
                        <div className="card card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Exercise</th>
                                        <th scope="col">Reps</th>
                                        <th scope="col">Sets</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        props.exercises.map((val, index) => {
                                            let exObj = val, exId = `ex-${index + 1}`; 
                                            return (
                                                <tr key={exId}>
                                                    <td>{exObj.ex}</td>
                                                    <td>{exObj.reps}</td>
                                                    <td>{exObj.sets}</td>
                                                </tr>  
                                            )
                                        })
                                    }
                                </tbody>
                            </table> 
                        </div>
                        
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <RecordResults  workoutId={props.workoutId} modalTarget={props.modalId} modalTargetId={props.dataModalId}/>
                                <br />
                            </div>                            
                        </div>
                    
                    </div>
                </div>
            </div>
        );

}

export default WorkoutCard;

