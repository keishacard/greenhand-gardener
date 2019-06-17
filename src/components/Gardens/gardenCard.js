import React, { Component } from "./node_modules/react";
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

export default class gardenCard1 extends Component {

    state = {
        user: {}
    }

    componentDidMount = () => {
        DBcalls.getUser(sessionStorage.getItem("credentials")).then(res => {
            this.setState({ user: res })
        })
        console.log(this.state.user)
    }

    // clickedCard = () => {
    //     alert("you clicked me")
    // }

    /*each garden gets a card that will be rendered when the user clicks a garden button on the dashboard*/
    render() {

        return (
            <React.Fragment>
                <div>
                    <Card>
                        <CardImg top width="100%" src="https://" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Salsa Dance</CardTitle>
                            <CardSubtitle></CardSubtitle>
                            <CardText>Grow everything you need to make delicious pico de gallo, salsa verde, or salsa rojo from scratch! A variety of peppers means you can tailor your salsas to your perfect level of spiciness.</CardText>
                            <div id="plantDiv"></div>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardImg top width="100%" src="https://" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Feed Your Friends</CardTitle>
                            <CardSubtitle></CardSubtitle>
                            <CardText>Your garden can be a haven for wildlife -- attract birds, wild bunnies, and pollinators like bees and butterflies.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardImg top width="100%" src="https://" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Bartender's Buddy</CardTitle>
                            <CardSubtitle></CardSubtitle>
                            <CardText>You too can become a fancy mixologist! Create classic cocktails like mojitos, basil smash, and sangrias with ingredients you grow.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardImg top width="100%" src="https://" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Not Your Grandma's Tea Garden</CardTitle>
                            <CardSubtitle></CardSubtitle>
                            <CardText>Get zen and brew tasty teas with these aromatic and beautiful herbs and flowers.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardImg top width="100%" src="https://" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Olive Garden Garden</CardTitle>
                            <CardSubtitle></CardSubtitle>
                            <CardText>Perfect your own signature pizza sauce or heap classic Italian home-grown herbs on fresh fococcia bread.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardImg top width="100%" src="https://" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>B.Y.O.</CardTitle>
                            <CardSubtitle></CardSubtitle>
                            <CardText>You're a rebel! Use our plant database and grow tips to design your dream garden.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </div>
            </React.Fragment>
        )
    }
}