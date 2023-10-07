import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "12px",
    margin: "6px",
    background: "blue",
    textDecoration: "none",
    color: "black",
    textAlign: "center",
    fontSize: "18px"
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

            <NavLink
                to="PostFeature"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "lightblue",
                }}
            >
                Add Emojis
            </NavLink>
        </div>
    );
}

export default NavBar