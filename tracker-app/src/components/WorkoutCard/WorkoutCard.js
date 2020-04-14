import React from 'react';

function WorkoutCard(props){

        return(
            <div className="col-md-3" id={props.key}>
                <div className="card text-white bg-dark mb-3">
                    <div className="card-header">
                        {props.exTitle}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{props.exType}</h5>
                        <h5 className="card-title">{props.exCategory}</h5>
                        <h5 className="card-title">{props.exIntesity}</h5>
                    </div>
                </div>
            </div>
        );

}

export default WorkoutCard;