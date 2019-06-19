import React, { PureComponent } from "react"

export default class UserGardensList extends PureComponent {

    render() {
        return (
            <div id={this.props.garden.id}>
                <h4 onClick={(evt) => { this.props.editGarden(evt.target.parentNode.id) }}>{this.props.garden.garden.title}</h4>
            </div>
        )
    }

}