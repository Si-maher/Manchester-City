import React, { Component } from "react"
// Discuss
import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/ToolBar"
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom"
import { borderBottom } from "@material-ui/system";
// *********
class Header extends Component {
    render() {
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor: "#98c5e9",
                    boxShadow: "none",
                    padding: "10px 0",
                    borderBottom: "2px solid #00285e"
                }}
            >
                <ToolBar styles={{ display: "flex" }}>

                </ToolBar>
            </AppBar>
        )
    }
}
export default Header 