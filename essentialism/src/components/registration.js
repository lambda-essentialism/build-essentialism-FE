import React from 'react';
import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';
import '../App.css';
//import axios from 'axios'
import Register from './nextarrow1.png';
//import {login} from '../actions/index'
import axios from 'axios'

const API = 'https://lambda-essentialism-backend.herokuapp.com/api';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstname:'',
                lastname:'',
                email:"",
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

       
        axios
        .post(`${API}/register`, {
        username: 'testuser',
        password: 'password'
    })
        .then(res => console.log(res))
         .catch(err => console.log(err));
        }

  



    render() {


        const { registering  } = this.props;


        const { user, submitted } = this.state;


        return (
            <div className="registration">
                <h2 className='welcome'>Welcome!</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                        <label className='inputinfo'htmlFor="firstName"></label>
                        <input type="text" className="form-control" name="firstName" placeholder='First Name' value={user.firstName} onChange={this.handleChange} />
                        {submitted && !user.firstName &&
                            <div className="help-block">First Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                        <label className='inputinfo' htmlFor="lastName"> </label>
                        <input type="text" className="form-control" name="lastName" placeholder='Last Name'value={user.lastName} onChange={this.handleChange} />
                        {submitted && !user.lastName &&
                            <div className="help-block">Last Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
                        <label className='inputinfo' htmlFor="email"></label>
                        <input type="text" className="form-control" name="email" placeholder='Email' value={user.email} onChange={this.handleChange} />
                        {submitted && !user.email &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                        <label className='inputinfo' htmlFor="username"></label>
                        <input type="text" className="form-control" name="username" placeholder='Username' value={user.username} onChange={this.handleChange} />
                        {submitted && !user.username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label className='inputinfo' htmlFor="password"></label>
                        <input type="password" className="form-control" name="password" placeholder='Password' value={user.password} onChange={this.handleChange} />
                        {submitted && !user.password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-btn">
                    <img alt ='arrow' src={Register} onClick={this.handleSubmit} className='regarrow'></img>
                        {registering 
                            
                        }
                        <Link to="/" className="signin-redirect">Already have an Account? Sign In</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default RegisterPage;



 /*this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        if (user.firstName && user.lastName && user.username && user.password) {
            dispatch(login.register(user));
        }*/