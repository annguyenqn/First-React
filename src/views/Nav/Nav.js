import React from "react";
import './Nav.scss'
import {
    NavLink, Link,
    BrowserRouter
} from "react-router-dom";
const Nav = () => {
    return (
        <>
            <div class="topnav">
                <NavLink class="active" to="/" exact={true}>Home</NavLink>
                <NavLink to="/mycom">Class Com</NavLink>
                <NavLink to="/Todo">Crud ClassCom</NavLink>
                <NavLink to="/hookcom">Crud HookCom</NavLink>
            </div>
        </>
    )
}
export default Nav