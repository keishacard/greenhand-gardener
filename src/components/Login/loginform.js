import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import DBcalls from "./DBcalls"

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

    handleLogin = e => {
        e.preventDefault()
        //This needs to be a DBcall to check if user exists and log them in
        DBcalls.getUser("email", this.state.password).then(emailResponse => {
            DBcalls.getUser("password", this.state.password).then(passwordResponse => {
                //Check to see if username or email are already registered
                if (nameResponse.length === 0) {
                    alert("Please try again.")
                }
                else {
                    sessionStorage.setItem("credentials", emailResponse[0].id)
                    this.props.loginUser(emailResponse[0].id)
                }
            })
        })
    }

    render() {
        return (
            <div>
                <form>
                    <Input type="email"></Input>
                </form>
            </div>
        )
    }
}