import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import FIELDS from './formFields';
import * as actions from '../../actions/action'

const surveyFormReview = ({ onCancel, formValues,submitSurvey,history }) => {
    return (
        <div>
            <h5>Please confirm your entries</h5>
            {FIELDS && FIELDS.map((p, i) => {
                return (
                    <div key={i}>
                        <label>{p.label}</label>
                        <div>{formValues[p.name]}</div>
                    </div>
                )
            })}
            <button className="btn-flat yellow darken-3 left" type="submit" name="action" onClick={onCancel}>Back
            </button>
            <button className="btn-flat green right" onClick={()=>submitSurvey(formValues,history)}>Send
            <i className="material-icons">send</i>
                </button>
        </div>
    )
}
function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    }
}
export default connect(mapStateToProps,actions)(withRouter(surveyFormReview));