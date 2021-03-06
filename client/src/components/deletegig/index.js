import React from 'react';
import { DeleteGigButton } from "../buttons";
import "../cards/style.css";

function VenueResultBox(props) {
    return (
        
            <div className = "gig-card">
                <img src = {props.src} alt = "Venue profile image image" className= "image"/>

                <div className = "card-text">
                    {/* either the artist's name/description/genre or the venue's */}
                    <h3 className = "card-title">{props.name}</h3>
                    <p className = "card-desc">{props.description}</p>
                    <p className = "card-genre">{props.genre}</p>
                    {/*===========================================================*/}
                    <p className = "card-date"> {props.date}</p>
                    <DeleteGigButton {...props}/>
                </div>
            </div>
        
    );
}

export default VenueResultBox;