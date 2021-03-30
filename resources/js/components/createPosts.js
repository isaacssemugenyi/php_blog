import React, { useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const createPosts = () => {
    const [ title, setTitle ] = useState('');
    const [ type, setType ] = useState('');
    const [ description, setDescription ] = useState('');
  
    const savePost = async (e) => {
        e.preventDefault();
        const res = await axios.post("/addPost", {title, type, description});
        if(res.data.status === 200){
            this.props.history.push("/dashboard");
        }
    }

        return(
            <div className="layout">
                <div className="sidebar">
                    <h1>Create</h1>
                    <h1>A New Posts</h1>
                    <div className="actionBtn">
                        <button className="active"><Link to="/"><FontAwesomeIcon icon="home" className="icon"/>Home</Link></button>
                        <button className="active"><Link to="/dashboard"><FontAwesomeIcon icon="desktop" className="icon"/>Dashboard</Link></button>
                        <button className="unactive"><FontAwesomeIcon icon="pencil-alt" className="icon"/>Create Posts</button>
                    </div>
                    <div className="footer"><p className="p1">No copyright | ©️ 2021, Isaac Ssemugenyi</p></div>
                </div>
                <div className="actionDiv">
                    <div className="Formdiv">
                        <form onSubmit={savePost}>
                            <div className="form-group">
                                <label>Title:</label>
                                <input type="text" name="title" className="form-control highlight" 
                                value={title} 
                                onChange={e => setTitle(e.target.value)}
                                placeholder="Enter the Title" required/>
                            </div>
                            <div className="form-group">
                                <label>Type:</label>
                                <select name="type" className="form-control highlight" 
                                value={type} 
                                onChange={e => setType(e.target.value)}
                                required>
                                    <option value="Announcement">Announcement</option>
                                    <option value="Selection">Selection</option>
                                    <option value="Placement">Placement</option>
                                    <option value="Training">Training</option>
                                    <option value="Internship">Internship</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Description:</label>
                                <textarea type="text" name="description" className="form-control highlight"
                                value={description} 
                                onChange={e => setDescription(e.target.value)} 
                                placeholder="Write the Description" required/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="primary">
                                    <FontAwesomeIcon icon="plus" className="icon"/>
                                    Add Post
                                </button>
                            </div>
                        </form>
                    </div>
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

export default createPosts;