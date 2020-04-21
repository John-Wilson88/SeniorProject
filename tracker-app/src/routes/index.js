import React from 'react';
import { Switch, Route} from 'react-router-dom';

import NewUser from '../components/NewUser';
import NewWorkout from '../components/NewWorkout';
import ViewWorkouts from '../components/ViewWorkouts';
import LandingPage from '../components/LandingPage';
import RecordResults from '../components/RecordResults';


export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/newuser" component={NewUser}/>
            <Route path="/createworkout" component={NewWorkout}/>
            <Route path="/allworkouts" component={ViewWorkouts}/>
            <Route path="/recordResults" component={RecordResults}/>
            
            {/* if route doesnt exist */}
            <Route component={ViewWorkouts}/>
        </Switch>
    )
}