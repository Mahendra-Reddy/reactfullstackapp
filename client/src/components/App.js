import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header/Header';
import {connect} from 'react-redux';
import * as actions from '../actions/action'
const Landing = () => <h1>Landing</h1>
const Survey = () => <h1>Survey </h1>
const SurveyNew = () => <h1> SurveyNew </h1>
const Dashboard = () => <h1>Dashboard</h1>

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
                        <Route  exact path='/' component={Landing} />
                        <Route path='/dashboard' component={Dashboard} />
                        <Route exact path='/survey' component={Survey} />
                        <Route path='/survey/new' component={SurveyNew} />
                        </div>
            </BrowserRouter>
           </div>
        ) 
    }
}
export default connect(null,actions)(App)