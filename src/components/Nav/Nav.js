import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    logUserOut = () => {
        sessionStorage.removeItem("credentials")
    }

    render() {
        return (
            <div>
                <Navbar fill="green" light expand="md">
                    <NavbarBrand style={{ color: "#ffb2ab" }} href="/">Greenhand Gardener</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink style={{ color: "#ffb2ab" }} href="/mygardens">My Gardens</NavLink>
                        </NavItem>
                        {/* <NavItem>
                            <NavLink href="/friends">Friends</NavLink>
                        </NavItem> */}
                        <NavItem>
                            <NavLink style={{ color: "#ffb2ab" }} href="/" onClick={this.logUserOut}>Logout</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}