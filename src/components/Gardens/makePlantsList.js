import React, { PureComponent } from "react"

export default class ListPlants extends PureComponent {

    render() {
        return (
            <li key={this.props.plant.id}>
                {this.props.plant.plantName}
                <ul>
                    <li>{this.props.plant.growTips}</li>
                    <li>{this.props.plant.hardinessZone}</li>
                    <div style={{ maxWidth: 200 }}>
                        <img src={this.props.plant.picture} alt={this.props.plant.plantName}></img>
                    </div>
                </ul>
            </li>
        )
    }

}