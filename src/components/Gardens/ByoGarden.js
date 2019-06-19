import React, { Component } from "react";
import DBcalls from "../DBcalls"
import { Button } from "reactstrap"
import ListPlants from "./ListPlants"
import PlantInfo from "./PlantInfo"
import "./garden.css"

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
        // this.props.history.push(`/gardenCard/${gardenId}`)
    }

    /*each garden gets a card that will be rendered when the user clicks a garden button on the dashboard*/
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
            </React.Fragment >
        )


        {/* <Form>
    <FormGroup>
        <Label for="exampleSelectMulti">Select Multiple</Label>
        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </Input>
    </FormGroup>
    <Button></Button>
</Form> */}