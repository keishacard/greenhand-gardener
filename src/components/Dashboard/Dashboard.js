import React, { Component } from 'react';
import salsaDance from "../img/use-salsa-button.jpg"
import bartender from "../img/use-bartender-buddy-button.jpg"
import tea from "../img/use-tea-garden-button.jpg"
import friends from "../img/use-friends-button.jpg"
import oliveGarden from "../img/use-olive-garden-button.jpg"
import byo from "../img/use-byo-button.jpg"
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
        alert(`you clicked me ${gardenId}`)
        this.props.history.push(`/gardenCard/${gardenId}`)
    }

    render() {

        return (
            <React.Fragment>
                <h1 align="center">Hello {this.state.user.username}, what do you dig?</h1>
                <div className="garden-container">
                    <div className="garden-card" id="1">
                        <img src={salsaDance} alt="salsa dance" onClick={(evt) => this.clickedCard(evt.target.parentNode.id)} />
                    </div>
                    <div className="garden-card" id="3">
                        <img src={friends} alt="feed your friends" onClick={this.clickedCard} />
                    </div>
                    <div className="garden-card" id="2">
                        <img src={bartender} alt="bartender's buddy" onClick={this.clickedCard} />
                    </div>
                    <div className="garden-card" id="4">
                        <img src={tea} alt="tea garden" onClick={this.clickedCard} />
                    </div>
                    <div className="garden-card" id="5">
                        <img src={oliveGarden} alt="olive garden garden" onClick={this.clickedCard} />
                    </div>
                    <div className="garden-card" id="6">
                        <img src={byo} alt="byo" onClick={this.clickedCard} />
                    </div>
                </div>
            </React.Fragment>
        )

    }
}