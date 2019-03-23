import React, { Component } from "react";
import '../App.css'
import { Link } from "react-router-dom";
import * as $ from 'axios';

class Login extends React.Component {
    state = {
        reguser: '',
        regpw: '',
        username: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value.toLowerCase()
        })
    }

    render() {
        return (
            <div >
                Login Page Placeholder
                <Link to="/world">World</Link>
            </div>
        );
    }
}

export default Login;