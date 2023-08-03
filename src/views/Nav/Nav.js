import React from "react";
import './Nav.scss'
import {
    NavLink, Link,
    BrowserRouter
} from "react-router-dom";
class Nav extends React.Component {
    render() {
        return (
            <>
                <div class="topnav">
                    <NavLink class="active" to="/" exact={true}>Home</NavLink>
                    <NavLink to="/mycom">My Component</NavLink>
                    <NavLink to="/Todo">To Do</NavLink>
                </div>
            </>
        )
    }
}
export default Nav