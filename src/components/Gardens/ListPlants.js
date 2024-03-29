import React, { PureComponent } from "react"

export default class ListPlants extends PureComponent {

    render() {
        return (
            <li style={{ marginBottom: 10 }} key={this.props.plant.id} onClick={(evt) => this.props.setPlant(evt.target.parentNode.id)}>
                {this.props.plant.plantName}
            </li>
        )
    }

}