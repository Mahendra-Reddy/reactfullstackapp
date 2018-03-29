import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from '../payments';

class Header extends React.Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to={this.props.auth ? '/survey' : '/'} className="left brand-logo">Emaily</Link>
                    <ul id="nav-mobile" className="right">
                        {this.props.auth === null && <li>
                        </li>
                        }
                        {this.props.auth === false && <li>
                            <a href="/auth/google">Login With Google</a>
                        </li>
                        }
                        {this.props.auth && <React.Fragment>
                            <li key="1">
                                <Payments />
                            </li>
                            <li key="3" style={{padding:'0 5px'}}>
                                {this.props.auth.credits}
                            </li>
                            <li key="2">
                                <a href="/api/logout">Logout</a>
                            </li>
                        </React.Fragment>
                        }
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapPropsToState({ auth }) {
    return { auth }
}

export default connect(mapPropsToState)(Header);