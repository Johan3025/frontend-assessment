import React from "react";

const ListingCard = ({ item, onViewDetails }) => {
    return (
        <div className="listing-card">
            <img src={item.ThumbnailURL} alt={item.Title} />
            <h3>{item.Title}</h3>
            <p>{item.Location}</p>
            <p>${item["Sale Price"].toLocaleString()}</p>
            <button onClick={() => onViewDetails(item)}>View Details</button>
        </div>
    );
};

export default ListingCard;

