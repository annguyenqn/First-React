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
                <NavLink to="/Flex">Learning Flex Box</NavLink>
                <NavLink to="/redux">Learning Redux</NavLink>
                <NavLink to="/TodoHook">Login</NavLink>
                <NavLink to="/ListUser">List User</NavLink>
                <NavLink to="/ReactHook">React Hook</NavLink>
            </div>
        </>
    )
}
export default Nav