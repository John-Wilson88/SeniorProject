import React from 'react';
import { Switch, Route} from 'react-router-dom';

import NewUser from '../components/NewUser';
import NewWorkout from '../components/NewWorkout';
import ViewWorkouts from '../components/ViewWorkouts';

export default function Routes() {
    return (
        <Switch>
            <Route path="/newuser" component={NewUser}/>
            <Route path="/createworkout" component={NewWorkout}/>
            <Route path="/allworkouts" component={ViewWorkouts}/>
            
            {/* if route doesnt exist */}
            <Route component={ViewWorkouts}/>
        </Switch>
    )
}