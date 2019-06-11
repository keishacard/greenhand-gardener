import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

export default class Login extends Component {

    state = {
        email: "",
        password: ""
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    handleLogin = (evt) => {
        console.log(this.props.users)
        let allUsers = this.props.users
        let inputEmail = this.state.email
        let inputPassword = this.state.password
        let matchUser = allUsers.find(user => user.email === inputEmail && user.password === inputPassword)
        console.log(this.state.email)
        // console.log("matchUsers", matchUser.id)
        evt.preventDefault();
        if (this.state.email | this.state.password === "") {
            window.alert("Please sign in");
        }
        else if (!matchUser) {
            window.alert("User not found");
        } else {
            sessionStorage.setItem(
                "credentials",
                matchUser.name,
            )
        } if (matchUser) {
            this.props.history.push("/forum");
            window.alert(`Welcome back ${matchUser.name}!`)
        }
    }

    render() {

    }