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
                            <CardText>Grow everything you need to make delicious pico de gallo, salsa verde, or salsa rojo from scratch!</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </div>
            </React.Fragment>
        )
    }
}