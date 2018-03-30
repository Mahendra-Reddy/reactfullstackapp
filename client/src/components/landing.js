import React from 'react';
import { connect } from 'react-redux';
import Dashboard from './dashboard';
const Landing = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <h2>Landing</h2>
        </div>
    )
}

class Login extends React.Component {
    render() {
        return (
            <div>
                {this.props.auth ? <Dashboard /> : <Landing />}
            </div>
        )
    }
}


function mapStateToProps({ auth }) {
    return { auth }
}

export default connect(mapStateToProps)(Login);