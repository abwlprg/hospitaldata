import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

//Components 
import LoadHomePage from './LoadHomePage';
import LoadCreateHospital from './LoadCreateHospital'
import LoadUpdateHospital from './LoadUpdateHospital'
import LoadDisplayHospital from './LoadDisplayHospital'
import LoadAllHospital from './LoadAllHospital'
import LoadPageNotFound from './LoadPageNotFound'


export default class App extends React.Component{
    constructor(props){
    super(props);
    }
    render(){
        return(
            <BrowserRouter>
                <Switch>
                <Route exact path='/'>
                    <LoadHomePage/>
                </Route>
                <Route exact path='/createhospital'>
                    <LoadCreateHospital/>
                </Route>
                <Route exact path='/updatehospital'>
                    <LoadUpdateHospital/>
                </Route>
                <Route exact path='/displayhospital'>
                    <LoadDisplayHospital/>
                </Route>
                <Route exact path='/allhospital'>
                    <LoadAllHospital/>
                </Route>
                <Route>
                    <LoadPageNotFound/>
                </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}