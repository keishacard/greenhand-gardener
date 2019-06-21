import React, { PureComponent } from "react"

export default class ListPlants extends PureComponent {

    render() {
        return (
            <li key={this.props.plantObject.id}>
                <h4 className="plant-headline">{this.props.plantObject.plantName}</h4>
                <ul>
                    <li>{this.props.plantObject.growTips}</li>
                    <li>{this.props.plantObject.hardinessZone}</li>
                    <div>
                        <img src={this.props.plantObject.picture} alt={this.props.plantObject.plantName}></img>
                    </div>
                </ul>
            </li>
        )
    }

}