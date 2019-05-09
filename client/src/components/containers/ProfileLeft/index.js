import React from "react";
import "./style.css";
import {LogoutButton} from "../../buttons";

function ProfileLeft(props) {
    console.log(props);

    return(
        <div className = "profile-left">
            <div className = "profile-picture">
                <img className = "image-profile" alt = "profile-pic" src = {`${props.image || props.profileImage}`} />
            </div>

            <div className = "profile-content">
                <h1 className = "name"> {props.artistName || props.venueName} </h1>


                {/* For Artist */}
                <p className="band-genres"> {props.genre} </p>
                <br></br>
                <p>Members: <strong>{props.numberOfMembers}</strong> </p>
                <p className = "instruments"> {props.instrumentation} </p>


                {/* For Venue */}
                <p className = "venue-address"> {props.street_address} </p>
                <p className = "venue-address"> {props.city && props.state && props.zipcode ? `${props.city}, ${props.state} ${props.zipcode}` : ""}</p>

                
            </div>

            <div className = "profile-bottom">
                <p> {props.email} </p>
                <a className = "website-link" href = {`${props.website}`} target="_blank">
                    {props.website}
                </a>
                <p> {props.phone} </p>

                {props.children}
            </div>
        </div>
    )
}

export default ProfileLeft;