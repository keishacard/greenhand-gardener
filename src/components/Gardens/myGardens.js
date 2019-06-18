import React, { Component } from "react";
import DBcalls from "../DBcalls"
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap';
import ListPlants from "./ListPlants"
import PlantInfo from "./PlantInfo"

export default class gardenCard extends Component {

    state = {
        garden: {},
        plants: []
    }

    componentDidMount = () => {
        let location = this.props.history.location
        console.log(location)
        let split = location.pathname.split("/")
        let garden = split.pop()
        DBcalls.getGardenPlants(garden).then(res => {
            this.setState(() => {
                return {
                    garden: res[0].garden,
                    plants: res
                    // currentPlantInfo: res[0].plant
                }
            })
        })
    }

    setCurrentPlantInfo = (currentPlantArrayIndex) => {
        let currentPlant = this.state.plants[currentPlantArrayIndex]
        this.setState({ currentPlantInfo: currentPlant.plant })
    }

    clickedEdit = () => {
        alert(`you wanna edit me`)
        // this.props.history.push(`/gardenCard/${gardenId}`)
    }

    clickedRemove = () => {
        alert(`you wanna remove me :(`)
        // this.props.history.push(`/gardenCard/${gardenId}`)
    }

    /*each garden gets a card that will be rendered when the user clicks a garden button on the dashboard*/
    render() {

        return (
            <React.Fragment >
                <h1 className="display-3">{this.state.garden.title}</h1>
                <h3>{this.state.garden.synopsis}</h3>
                <div className="flexContainer">
                    <div className="plant-name-div">
                        <ul>
                            {this.state.plants.map((plant, plantArrayId) => {
                                return (
                                    <div id={plantArrayId}>
                                        <ListPlants plant={plant.plant} key={plant.plant.id} setPlant={this.setCurrentPlantInfo} />
                                    </div>
                                )

                            })}
                        </ul>
                    </div>
                    <div className="plant-info-div">
                        {(this.state.currentPlantInfo) ? <PlantInfo plantObject={this.state.currentPlantInfo} /> : null}
                    </div>
                </div>
                <Button onClick={(evt) => this.clickedSave()}>Save This Garden</Button>
                <Button onClick={(evt) => this.clickedRemove(d)}>Remove This Garden</Button>
            </React.Fragment >
        )
    }
}