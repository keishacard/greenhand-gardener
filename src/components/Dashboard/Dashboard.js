import React, { Component } from 'react';
// import salsaDance from "../img/use-salsa-button.jpg"
// import bartender from "../img/use-bartender-buddy-button.jpg"
// import tea from "../img/use-tea-garden-button.jpg"
// import friends from "../img/use-friends-button.jpg"
// import oliveGarden from "../img/use-olive-garden-button.jpg"
// import byo from "../img/use-byo-button.jpg"
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

    clickedCard = (gardenId) => {
        // alert(`you clicked me ${gardenId}`)
        this.props.history.push(`/gardenCard/${gardenId}`)
    }

    buildNewUserGarden = () => {
        this.props.history.push("/byogarden")
    }

    render() {

        return (
            <React.Fragment>
                <h1 align="center">Hello {this.state.user.username}, what do you dig?</h1>
                <div className="garden-container">
                    <div className="garden-card" id="1">
                        <img src={process.env.PUBLIC_URL + "/img/use-salsa-button.jpg"} alt="salsa dance" onClick={(evt) => this.clickedCard(evt.target.parentNode.id)} />
                    </div>
                    <div className="garden-card" id="3">
                        <img src={process.env.PUBLIC_URL + "/img/use-friends-button.jpg"} alt="feed your friends" onClick={(evt) => this.clickedCard(evt.target.parentNode.id)} />
                    </div>
                    <div className="garden-card" id="2">
                        <img src={process.env.PUBLIC_URL + "/img/use-bartender-buddy-button.jpg"} alt="bartender's buddy" onClick={(evt) => this.clickedCard(evt.target.parentNode.id)} />
                    </div>
                    <div className="garden-card" id="4">
                        <img src={process.env.PUBLIC_URL + "/img/use-tea-garden-button.jpg"} alt="tea garden" onClick={(evt) => this.clickedCard(evt.target.parentNode.id)} />
                    </div>
                    <div className="garden-card" id="5">
                        <img src={process.env.PUBLIC_URL + "/img/use-olive-garden-button.jpg"} alt="olive garden garden" onClick={(evt) => this.clickedCard(evt.target.parentNode.id)} />
                    </div>
                    <div className="garden-card" id="6">
                        <img src={process.env.PUBLIC_URL + "/img/use-byo-button.jpg"} alt="byo" onClick={(evt) => this.buildNewUserGarden()} />
                    </div>
                </div>
            </React.Fragment>
        )

    }
}