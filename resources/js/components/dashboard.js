import React from "react";
import { Link } from "react-router-dom";
import Posts from "./Posts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const dashboard = () => {
        return(
            <div className="layout">
                <div className="sidebar">
                    <h1>Your</h1>
                    <h1>Dashboard</h1>
                    <div className="actionBtn">
                        <button className="active"><Link to="/"><FontAwesomeIcon icon="home" className="icon"/>Home</Link></button>
                        <button className="unactive"><FontAwesomeIcon icon="desktop" className="icon"/>Dashboard</button>
                        <button className="active"><Link to="/addPosts"><FontAwesomeIcon icon="pencil-alt" className="icon"/>Create Posts</Link></button>
                    </div>
                    <div className="footer"><p className="p1">No copyright | ©️ 2021, Isaac Ssemugenyi</p></div>
                </div>
                <div className="PostDiv">
                    <Posts />
                </div>
                <div className="right-sidebar">
                    <div className="Greeting">
                        <h5>Hello, Welcome Back!. And Have A Nice Day</h5>
                        <button className="primary"><FontAwesomeIcon icon="calendar" className="icon"/>View Events</button>
                    </div>
                </div>
            </div>
        )
}

export default dashboard;