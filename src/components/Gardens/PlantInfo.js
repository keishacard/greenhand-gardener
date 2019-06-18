import React, { PureComponent } from "react"

export default class ListPlants extends PureComponent {

    render() {
        return (
            <li key={this.props.plantObject.id}>
                {this.props.plantObject.plantName}
                <ul>
                    <li>{this.props.plantObject.growTips}</li>
                    <li>{this.props.plantObject.hardinessZone}</li>
                    <div>
                        <img style={{ maxWidth: 200, maxHeight: 300 }} src={this.props.plantObject.picture} alt={this.props.plantObject.plantName}></img>
                    </div>
                </ul>
            </li>
        )
    }

}