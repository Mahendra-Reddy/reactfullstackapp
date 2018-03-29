import React from 'react';
import _ from 'lodash';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './surveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validationEmails';
import FIELDS from './formFields';

class SurveyForm extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {
                        FIELDS.map(function (item, index) {
                            return (
                                <Field type="text"
                                    key={item.name}
                                    name={item.name}
                                    label={item.label}
                                    component={SurveyField}
                                />
                            )
                        })
                    }
                    <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
                    <button className="btn waves-effect right waves-light" type="submit" name="action">Submit
                          <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
        )
    }
}
function validate(values) {
    const errors = {};
    _.each(FIELDS, ({ name }) => {
        if (!values[name]) {
            errors[name] = 'you must provide value';
        }
    });

    errors.recipients = validateEmails(values.recipients|| '')

    return errors;
}
export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount:false
})(SurveyForm);