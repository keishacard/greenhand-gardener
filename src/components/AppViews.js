import React, { Component } from 'react'
import { Route, Redirect } from "react-router-dom"
import Login from "./Login/loginform"


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
            api.checkUserThing("id", userId).then(response => this.setState({ displayName: response[0].displayName }))
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
                    <Login loginUser={this.loginUser} />
                </React.Fragment>
            )
        }
    }

}