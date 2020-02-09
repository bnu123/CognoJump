import React from 'react'
import LoginForm from './PageElements/LoginForm';


class LoginPage extends React.Component{

    submit = (data)=>(
        this.props.login(data) //thunk action
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

export default LoginPage;