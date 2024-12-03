import React, { useState } from "react";

const FilterBar = ({ onFilter }) => {
    const [bedrooms, setBedrooms] = useState("");
    const [bathrooms, setBathrooms] = useState("");
    const [parking, setParking] = useState("");
    const [priceRange, setPriceRange] = useState([0, 1000000]);

    const handleSearch = () => {
        onFilter({ bedrooms: parseInt(bedrooms), bathrooms: parseInt(bathrooms), parking: parseInt(parking), priceRange });
    };

    return (
        <div className="filter-bar">
            <input
                type="number"
                placeholder="Bedrooms"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
            />
            <input
                type="number"
                placeholder="Bathrooms"
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value)}
            />
            <input
                type="number"
                placeholder="Parking"
                value={parking}
                onChange={(e) => setParking(e.target.value)}
            />
            <input
                type="number"
                placeholder="Min Price"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
            />
            <input
                type="number"
                placeholder="Max Price"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default FilterBar;