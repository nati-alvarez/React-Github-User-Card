import React from "react";
import "./Usercard.css";

export default function Usercard({user}){
    return(
        <div className="user-card">
            <img alt="user avatar" className="pfp" src={user.avatar_url}/>
            <div className="user-info">
                <h3 className="name">{user.name}</h3>
                <address className="username">@{user.login}</address>
                <p className="bio">{user.bio}</p>
                <a href={user.html_url}>{user.html_url}</a>
            </div>
        </div>
    )
}