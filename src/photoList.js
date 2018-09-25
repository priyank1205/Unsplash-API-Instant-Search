import React from 'react';
import PhotoItem from './photoItem';

const PhotoList = (props) => {

    if(props.photos === []){
        return <div>LOADING ....</div>
    }

    const photoItems = props.photos.map((item, i) => {
        return(
            <PhotoItem
            user={item.user}
            link={item.links.html}
            url={item.urls.small}
            altText={item.description}
            key={i}
            searchTerm={props.searchText}
            />
        )
    });

    return(
        <ul>
            {photoItems}
        </ul>
    )
};

export default PhotoList;