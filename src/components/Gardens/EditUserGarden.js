import React, { Component } from "react";
import DBcalls from "../DBcalls"
import { Button } from "reactstrap"
import "../gardens/garden.css"

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
                currentGarden: res,
                plants: res.garden.plants
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
                    <div className="container">
                        <h2 className="display-3 bottom-border">Edit Your Garden</h2>
                        <h4>Click on a plant to remove it from your garden.</h4>
                        <Button color="primary" onClick={this.postEditedUserGarden}>Save Garden</Button>
                        <Button color="danger" onClick={this.deleteUserGarden}>Remove Garden</Button>
                        <h3 className="display-4">{this.state.currentGarden.garden.title}</h3>
                        <ul className="edit-garden-list">
                            {this.state.plants.map((plant, index) => {
                                return (
                                    <li id={index} onClick={(evt) => this.removePlantFromGarden(evt.target.id)}>{plant.plantName}</li>
                                )
                            })}
                        </ul>
                    </div>
                </React.Fragment>

            )
        }
        else {
            return null
        }
    }
}