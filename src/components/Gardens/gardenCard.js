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
            let newPlantsArray = res.map(plant => {
                return plant.plant
            })
            console.log(newPlantsArray)
            this.setState(() => {
                return {
                    garden: res[0].garden,
                    plants: newPlantsArray
                    // currentPlantInfo: res[0].plant
                }
            })
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
        // this.props.history.push(`/gardenCard/${gardenId}`)
    }

    /*each garden gets a card that will be rendered when the user clicks a garden button on the dashboard*/
    render() {

        return (
            <React.Fragment >
                <h1 className="display-3" style={{ marginLeft: 20 }}>{this.state.garden.title}</h1>
                <Button style={{ backgroundColor: "#2c5c4c", color: "#ffb2ab", marginLeft: 20 }} onClick={this.clickedSave}>Save This Garden</Button>
                <div style={{ maxWidth: "70%", margin: 20 }}>
                    <h3>{this.state.garden.synopsis}</h3>
                </div>
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
                    </div>
                </div>
            </React.Fragment >
        )

        // return (
        //     <React.Fragment>
        //         <div>
        //             <Card>
        //                 <CardImg top width="100%" src="https://" alt="Card image cap" />
        //                 <CardBody>
        //                     <CardTitle>Salsa Dance</CardTitle>
        //                     <CardSubtitle></CardSubtitle>
        //                     <CardText>Grow everything you need to make delicious pico de gallo, salsa verde, or salsa rojo from scratch! A variety of peppers means you can tailor your salsas to your perfect level of spiciness.</CardText>
        //                     <div id="plantDiv"></div>
        //                     <Button>Button</Button>
        //                 </CardBody>
        //             </Card>
        //         </div>
        //         <div>
        //             <Card>
        //                 <CardImg top width="100%" src="https://" alt="Card image cap" />
        //                 <CardBody>
        //                     <CardTitle>Feed Your Friends</CardTitle>
        //                     <CardSubtitle></CardSubtitle>
        //                     <CardText>Your garden can be a haven for wildlife -- attract birds, wild bunnies, and pollinators like bees and butterflies.</CardText>
        //                     <Button>Button</Button>
        //                 </CardBody>
        //             </Card>
        //         </div>
        //         <div>
        //             <Card>
        //                 <CardImg top width="100%" src="https://" alt="Card image cap" />
        //                 <CardBody>
        //                     <CardTitle>Bartender's Buddy</CardTitle>
        //                     <CardSubtitle></CardSubtitle>
        //                     <CardText>You too can become a fancy mixologist! Create classic cocktails like mojitos, basil smash, and sangrias with ingredients you grow.</CardText>
        //                     <Button>Button</Button>
        //                 </CardBody>
        //             </Card>
        //         </div>
        //         <div>
        //             <Card>
        //                 <CardImg top width="100%" src="https://" alt="Card image cap" />
        //                 <CardBody>
        //                     <CardTitle>Not Your Grandma's Tea Garden</CardTitle>
        //                     <CardSubtitle></CardSubtitle>
        //                     <CardText>Get zen and brew tasty teas with these aromatic and beautiful herbs and flowers.</CardText>
        //                     <Button>Button</Button>
        //                 </CardBody>
        //             </Card>
        //         </div>
        //         <div>
        //             <Card>
        //                 <CardImg top width="100%" src="https://" alt="Card image cap" />
        //                 <CardBody>
        //                     <CardTitle>Olive Garden Garden</CardTitle>
        //                     <CardSubtitle></CardSubtitle>
        //                     <CardText>Perfect your own signature pizza sauce or heap classic Italian home-grown herbs on fresh fococcia bread.</CardText>
        //                     <Button>Button</Button>
        //                 </CardBody>
        //             </Card>
        //         </div>
        //         <div>
        //             <Card>
        //                 <CardImg top width="100%" src="https://" alt="Card image cap" />
        //                 <CardBody>
        //                     <CardTitle>B.Y.O.</CardTitle>
        //                     <CardSubtitle></CardSubtitle>
        //                     <CardText>You're a rebel! Use our plant database and grow tips to design your dream garden.</CardText>
        //                     <Button>Button</Button>
        //                 </CardBody>
        //             </Card>
        //         </div>
        //     </React.Fragment>
        // )
    }
}