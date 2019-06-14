import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import DBcalls from "../DBcalls"


export default class Register extends Component {

    state = {

    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleRegister = (evt) => {
        evt.preventDefault()
        let newUser = {
            email: this.state.email,
            password: this.state.password
        }
        DBcalls.checkUserLogin(this.state.email).then(res => {
            if (res.length !== 0) {
                alert("Email already registered")
            }
            else {
                DBcalls.postNewUser(newUser).then(res => {
                    sessionStorage.setItem("credentials", res.id)
                    this.props.loginUser(res.id)
                })
            }
        })
    }


    render() {
        return (
            <React.Fragment>
                <h1 className="display-1" align="center">Greenhand Gardener</h1>
                <h2 className="display-3" align="center">Register Account</h2>
                <Form onSubmit={this.handleRegister}>
                    <div>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" onChange={this.handleFieldChange} id="email"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" onChange={this.handleFieldChange} id="password"></Input>
                        </FormGroup>
                        <Button color="primary">Register</Button>
                    </div>
                </Form>
            </React.Fragment>
        )
    }
}