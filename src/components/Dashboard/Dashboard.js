import React, { Component } from 'react';
import salsaDance from "../img/salsa-dance.jpg"
import "./Dashboard.css"
import DBcalls from "../DBcalls"

export default class Dashboard extends Component {

    state = {
        user: {}
    }

    componentDidMount = () => {
        DBcalls.getUser(sessionStorage.getItem("credentials")).then(res => {
            this.setState({ user: res })
        })
        console.log(this.state.user)
    }

    clickedCard = () => {
        alert("you clicked me")
    }

    render() {

        return (
            <React.Fragment>
                <h1 align="center">Hello {this.state.user.email}, what do you dig?</h1>
                <div className="garden-container">
                    <div className="garden-card">
                        <img src={salsaDance} alt="salsa dance" onClick={this.clickedCard} />
                    </div>
                    <div className="garden-card">
                        <img src={salsaDance} alt="salsa dance" onClick={this.clickedCard} />
                    </div>
                    <div className="garden-card">
                        <img src={salsaDance} alt="salsa dance" onClick={this.clickedCard} />
                    </div>
                    <div className="garden-card">
                        <img src={salsaDance} alt="salsa dance" onClick={this.clickedCard} />
                    </div>
                    <div className="garden-card">
                        <img src={salsaDance} alt="salsa dance" onClick={this.clickedCard} />
                    </div>
                    <div className="garden-card">
                        <img src={salsaDance} alt="salsa dance" onClick={this.clickedCard} />
                    </div>
                </div>
            </React.Fragment>
        )

    }
}