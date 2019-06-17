import React from 'react'
import LoginForm from './PageElements/LoginForm';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';


class LoginPage extends React.Component{

    submit = (data)=>(
        this.props.login(data)
        .then(()=> this.props.history.push('/')
        )
    );

    render(){
        return (
            <div>
            <LoginForm submit={this.submit} /> 
            </div>
        );
    }
}

export default connect(null, { login })(LoginPage);