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

export default class MyGardens extends Component {

    state = {
        garden: {},
        plants: []
    }

    // componentDidMount = () => {
    //     let location = this.props.history.location
    //     console.log(location)
    //     let split = location.pathname.split("/")
    //     let garden = split.pop()
    //     DBcalls.getGardenPlants(garden).then(res => {
    //         this.setState(() => {
    //             return {
    //                 garden: res[0].garden,
    //                 plants: res
    //                 // currentPlantInfo: res[0].plant
    //             }
    //         })
    //     })
    // }

    // setCurrentPlantInfo = (currentPlantArrayIndex) => {
    //     let currentPlant = this.state.plants[currentPlantArrayIndex]
    //     this.setState({ currentPlantInfo: currentPlant.plant })
    // }

    clickedEdit = () => {
        alert(`you wanna edit me`)
        // this.props.history.push(`/gardenCard/${gardenId}`)
    }

    clickedRemove = () => {
        alert(`you wanna remove me :(`)
        // this.props.history.push(`/gardenCard/${gardenId}`)
    }

    // render the gardens user has saved
    render() {

        return (
            <React.Fragment >
                <div className="savedGarden">
                    <h3>Saved Garden</h3>
                </div>
                <Button onClick={(evt) => this.clickedSave()}>Save This Garden</Button>
                <Button onClick={(evt) => this.clickedRemove()}>Remove This Garden</Button>
            </React.Fragment >
        )
    }
}