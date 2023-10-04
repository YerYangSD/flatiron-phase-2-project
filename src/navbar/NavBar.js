import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
};

function NavBar() {
    return (
        <div className="navbar">
            <NavLink
                to="/"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "lightblue",
                }}
            >
                Home
            </NavLink>

            <NavLink
                to="Game"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "lightblue",
                }}
            >
                Game
            </NavLink>
        </div>
    );
}

export default NavBar