import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import DBcalls from "../DBcalls"

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
        DBcalls.checkUserLogin(this.state.email).then(res => {
            if (res.length === 0) {
                alert("Not a registered email")
            }
            else {
                if (res[0].password !== this.state.password) {
                    alert("password incorrect")
                }
                else {
                    sessionStorage.setItem("credentials", res[0].id)
                    this.props.loginUser(res[0].id)
                }
            }
        })
    }


    render() {
        return (
            <React.Fragment>
                <h1 class="display-1" align="center">Greenhand Gardener</h1>
                <Form onSubmit={this.handleLogin}>
                    <div>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" onChange={this.handleFieldChange} id="email"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" onChange={this.handleFieldChange} id="password"></Input>
                        </FormGroup>
                        <Button color="primary">Login</Button>
                    </div>
                </Form>
                <Button color="secondary" onClick={() => this.props.history.push("/register")}>Register</Button>
            </React.Fragment>
        )
    }
}