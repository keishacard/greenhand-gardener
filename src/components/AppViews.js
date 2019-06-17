import React, { Component } from 'react'
import { Route } from "react-router-dom"
import Login from "./Login/loginform"
import Register from "./Login/Register"
import Dashboard from "./Dashboard/Dashboard"
import Nav from "./Nav/Nav"
import GardenCard from "./gardens/gardenCard"


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
                    {/* All authenticated routes go here, must be exact paths or go back to login */}

                    {/* Navbar Route */}
                    <Route path="/" render={(props) => { return <Nav {...props} /> }} />

                    {/* Dashboard Route */}
                    <Route exact path="/"
                        render={(props) => {
                            return <Dashboard {...props} loginUser={this.loginUser} />
                        }} />

                    {/* My Gardens Route */}
                    <Route path="/gardenCard"
                        render={(props) => {
                            return <GardenCard {...props} />
                        }} />

                    {/* Friends Route */}

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