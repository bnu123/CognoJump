import React, { Component } from 'react'
import InlineError from '../../messages/InlineError';

class LoginForm extends Component {

    state = {
        data : {
            email : "",
            password : ""
        },
        loading : false,
        errors : {},
    }
    

    onChange = (e)=>{
        this.setState({data : {...this.state.data, [e.target.name]:e.target.value}})
    };

    onSubmit = (e)=>{
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({errors});

        if(Object.keys(errors).length === 0){
            this.props.submit(this.state.data)
            .catch(err => this.setState({errors : err.response.data.errors}))
        }
    };
    
    validate = (data)=>{
        const errors = {};

        if(!data.password) errors.password = "Password can't be blank";
        return errors;
    }

    render() {
        const { data, errors } = this.state;
        return (
            <div className="container" style={{marginTop : "8em"}}>
               <form onSubmit={this.onSubmit}>
                {errors.global && <div className="alert alert-danger" role="alert">
                    Something went wrong
                </div>}
                   <div className="row">
                        <div className="col">
                            <label htmlFor="formInputEmail">Email </label>
                            <input 
                             type="email"
                             name="email" 
                             className="form-control" 
                             id="email_add" 
                             placeholder="jeremy.runner@gmail.com" 
                             value={data.email}
                             onChange={this.onChange} />
                             {errors.email && <InlineError text={errors.email} />}
                        </div>
                   </div>
                   <div className="row">
                        <div className="col">
                            <label htmlFor="formInputPassword">Password</label>
                            <input 
                             type="password" 
                             name="password"
                             className="form-control" 
                             id="password" 
                             placeholder="Password" 
                             value={data.password}
                             onChange={this.onChange} />
                             {errors.password && <InlineError text={errors.password} />}
                        </div>
                   </div>
                   <div className="row" style={{marginTop : "1em"}}>
                        <div className="col">
                            <button type="submit" className="btn btn-outline-primary">SignIn</button>
                        </div>
                   </div>
               </form>
            </div>
        )
    }
}
export default LoginForm;