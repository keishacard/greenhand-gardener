import React, { Component } from 'react'
import { Route, Redirect } from "react-router-dom"
import Login from "./Login/loginform"
import Register from "./Login/Register"


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
                </React.Fragment>
            )
        else {
            return (
                <React.Fragment>
                    <Route exact path="/"
                        render={(props) => {
                            return <Login {...props} loginUser={this.loginUser} />
                        }} />

                    <Route exact path="/register"
                        render={(props) => {
                            return <Register {...props} loginUser={this.loginUser} />
                        }} />
                </React.Fragment>
            )
        }
    }

}