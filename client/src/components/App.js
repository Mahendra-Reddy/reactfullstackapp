import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions/action';

import Header from './Header/Header';
import Login from './landing';
import Dashboard from './dashboard';
import SurveyNew from './Surveys/surveyNew';


class App extends React.Component {

    componentDidMount(){
      this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route  exact path='/' component={Login} />
                        <Route exact path='/surveys' component={Dashboard} />
                        <Route exact path='/survey/new' component={SurveyNew} />
                        </div>
            </BrowserRouter>
           </div>
        ) 
    }
}
export default connect(null,actions)(App)