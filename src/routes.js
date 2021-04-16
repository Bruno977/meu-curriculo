import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';



export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/skills" component={Skills} />
            </Switch>
        </BrowserRouter>
    );
}