import React, { Component } from "react";
import DBcalls from "../DBcalls"
import UserGardensList from "./UserGardensList"

export default class MyGardens extends Component {

    state = {
        gardens: []
    }

    componentDidMount = () => {

        let userId = sessionStorage.getItem("credentials")
        userId = parseInt(userId)
        DBcalls.getUserGardens(userId).then(res => {
            this.setState({ gardens: res })
        })
    }

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

    editGarden = (userGardenId) => {
        this.props.history.push(`editGarden/${userGardenId}`)
    }

    // render the gardens user has saved
    render() {
        return (
            <React.Fragment >
                <h1>My Gardens</h1>
                {this.state.gardens.map(userGarden => {
                    return (
                        <UserGardensList garden={userGarden} key={userGarden.id} editGarden={this.editGarden} />
                    )
                })}
                {/* <div className="savedGarden">
                    <h3>Saved Garden</h3>
                </div>
                <Button onClick={(evt) => this.clickedEdit()}>Edit This Garden</Button>
                <Button onClick={(evt) => this.clickedRemove()}>Remove This Garden</Button> */}
            </React.Fragment >
        )
    }
}