import React, { Component } from 'react'
import { Route } from "react-router-dom"
import Login from "./Login/loginform"
import Register from "./Login/Register"
import Dashboard from "./Dashboard/Dashboard"
import Nav from "./Nav/Nav"


export default class AppViews extends Component {

    state = {

    }

    loginUser = (userId) => {
        this.setState({ auth: userId })
    }

    isAuthenticated = () => {
        return sessionStorage.getItem("credentials")
    }

    componentDidMount() {
        if (sessionStorage.getItem("credentials")) {
            const userId = sessionStorage.getItem("credentials")
            this.setState({ auth: userId })
        }
    }


    render() {
        if (this.isAuthenticated())
            return (
                <React.Fragment>
                    {/* All authenticated routes go here */}
                    <Route path="/" render={(props) => { return <Nav {...props} /> }} />

                    <Route exact path="/"
                        render={(props) => {
                            return <Dashboard {...props} loginUser={this.loginUser} />
                        }} />
                </React.Fragment>
            )
        else {
            return (
                <React.Fragment>
                    <Route exact path="/"
                        render={(props) => {
                            return <Login {...props} loginUser={this.loginUser} />
                        }} />

                    <Route path="/register"
                        render={(props) => {
                            return <Register {...props} loginUser={this.loginUser} />
                        }} />
                </React.Fragment>
            )
        }
    }

}