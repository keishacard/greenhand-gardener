import React, { Component } from "react";
import DBcalls from "../DBcalls"

export default class EditUserGarden extends Component {

    state = {
    }

    componentDidMount = () => {
        let location = this.props.history.location
        let split = location.pathname.split("/")
        let garden = split.pop()
        DBcalls.getUserGarden(garden).then(res => {
            this.setState({
                userGardenId: garden,
                currentGarden: res
            })
        })
    }

    removePlantFromGarden = (plantId) => {
        console.log(plantId)
        let editGarden = this.state.currentGarden
        editGarden.garden.plants.splice(plantId, 1)
        this.setState({
            currentGarden: editGarden
        })
    }

    postEditedUserGarden = () => {
        DBcalls.postEditedUserGarden(this.state.currentGarden, this.state.userGardenId).then(res => {
            this.props.history.push("/myGardens")
        })
    }

    deleteUserGarden = () => {
        DBcalls.deleteUserGarden(this.state.currentGarden, this.state.userGardenId).then(res => {
            this.props.history.push("/myGardens")
        })
    }

    render() {
        if (this.state.currentGarden) {
            return (
                <React.Fragment>
                    <h1>test</h1>
                    <button onClick={this.postEditedUserGarden}>Save Garden</button>
                    <button onClick={this.deleteUserGarden}>Remove Garden</button>
                    <h3>{this.state.currentGarden.garden.title}</h3>
                    <ul>
                        {this.state.currentGarden.garden.plants.map((plant, index) => {
                            return (
                                <li id={index} onClick={(evt) => this.removePlantFromGarden(evt.target.id)}>{plant.plant.plantName}</li>
                            )
                        })}
                    </ul>
                </React.Fragment>

            )
        }
        else {
            return null
        }
    }
}