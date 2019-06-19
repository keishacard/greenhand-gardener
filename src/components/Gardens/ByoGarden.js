import React, { Component } from "react";
import DBcalls from "../DBcalls"
import { Button } from "reactstrap"
import ListPlants from "./ListPlants"
import PlantInfo from "./PlantInfo"
import "./garden.css"

export default class ByoGarden extends Component {

    state = {
        garden: {},
        plants: [],
        userGardenObject: {
            "userId": 1,
            "garden": {
                "title": "Build Your Own",
                "synopsis": "",
                "plants": []
            },
        }
    }

    componentDidMount = () => {
        DBcalls.getAllPlants().then(res => {
            console.log(res)
            this.setState({ plants: res })
        })
        DBcalls.getGarden(6).then(res => {
            this.setState({ garden: res })
        })
    }

    setCurrentPlantInfo = (currentPlantArrayIndex) => {
        let currentPlant = this.state.plants[currentPlantArrayIndex]
        this.setState({ currentPlantInfo: currentPlant })
    }

    clickedSave = () => {
        alert(`you're saving ${this.state.garden.title}`)
        let userGardenObj = {
            title: this.state.garden.title,
            synopsis: this.state.garden.synopsis,
            plants: this.state.plants
        }
        DBcalls.postUserGarden(sessionStorage.getItem("credentials"), userGardenObj).then(res => {
            console.log(res)
        })

    }

    clickedSavePlant = () => {
        let newGardenObject = this.state.userGardenObject
        newGardenObject.garden.plants.push(this.state.currentPlantInfo)
        this.setState({
            userGardenObject: newGardenObject
        })
    }

    /*render a garden card that has ALL plants from the DB, 2nd div to have plant info, like garden card, but add button in 2nd div to save that plant*/

    render() {

        return (
            <React.Fragment >
                <h1 className="display-3">{this.state.garden.title}</h1>
                <Button color="primary" onClick={this.clickedSave}>Save This Garden</Button>
                <h3>{this.state.garden.synopsis}</h3>
                <div className="flexContainer">
                    <div className="plant-name-div">
                        <ul>
                            {this.state.plants.map((plant, plantArrayId) => {
                                return (
                                    <div id={plantArrayId}>
                                        <ListPlants plant={plant} key={plant.id} setPlant={this.setCurrentPlantInfo} />
                                    </div>
                                )

                            })}
                        </ul>
                    </div>
                    <div className="plant-info-div">
                        {(this.state.currentPlantInfo) ? <PlantInfo plantObject={this.state.currentPlantInfo} /> : null}
                        <Button color="primary" onClick={this.clickedSavePlant}>Save This Plant</Button>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}