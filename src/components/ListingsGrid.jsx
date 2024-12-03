import React from "react";
import ListingCard from "./ListingCard";

const ListingsGrid = ({ data, onViewDetails }) => {
    return (
        <div className="listings-grid">
            {data.map((item) => (
                <ListingCard key={item.Id} item={item} onViewDetails={onViewDetails} />
            ))}
        </div>
    );
};

export default ListingsGrid;