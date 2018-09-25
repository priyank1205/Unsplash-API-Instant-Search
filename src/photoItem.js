import React from 'react';

const PhotoItem = (props) => {
    return(
        <a href= {props.link} target="_blank">
            <div className="imgBlock">
                <div className="overlay">
                    <div className="overlayBG"></div>
                    <div className="imgTitle">{props.altText}</div>
                    <div className="userInfo">Photo by <a href={props.user.links.html}>{props.user.name}</a> on <a href="http://unsplash.com">Unsplash</a></div>
                </div>
                <img src={props.url} alt={props.altText}></img>
            </div>
        </a>
    )
};

export default PhotoItem;

