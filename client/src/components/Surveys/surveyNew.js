import React from 'react';
import {reduxForm} from 'redux-form';
import SurveyForm from './surveyForm';
import ReviewSurveyForm from './surveyFormReview';
import surveyForm from './surveyForm';

class SurveyNew extends React.Component {
    state = { showFormReview: false }
    render() {
        return (
            <div>
                {this.state.showFormReview ? <ReviewSurveyForm onCancel={()=>this.setState({showFormReview: false})}/>:<SurveyForm onSurveySubmit={()=>this.setState({showFormReview:true})}/> }
            </div>
        )
    }
}
export default reduxForm({
    form:'surveyForm'
})(SurveyNew);