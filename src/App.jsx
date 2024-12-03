import React, { useState } from "react";
import FilterBar from "./components/FilterBar";
import ListingsGrid from "./components/ListingsGrid";
import ListingDetails from "./components/ListingDetails";
import data from "./data/listings.json";
import "./App.css";


function App() {

    const [filteredData, setFilteredData] = useState(data); // Estado para los datos filtrados
    const [selectedListing, setSelectedListing] = useState(null); // Estado para el listado seleccionado

       const handleFilter = (filters) => {
           const { bedrooms, bathrooms, parking, priceRange } = filters;
           
           const filtered = data.filter((item) => {
               return (
                   (bedrooms ? item.Bedrooms === bedrooms : true) &&
                   (bathrooms ? item.Bathrooms === bathrooms : true) &&
                   (parking ? item.Parking === parking : true) &&
                   (priceRange
                       ? item["Sale Price"] >= priceRange[0] &&
                         item["Sale Price"] <= priceRange[1]
                       : true)
               );
           });
           setFilteredData(filtered);
       };

    const handleViewDetails = (listing) => {
    setSelectedListing(listing);
    };

    const closeDetails = () => {
        setSelectedListing(null);
    };

    return (
        <div className="app">
            {!selectedListing ? (
                <>
                    <FilterBar onFilter={handleFilter} />
                    <ListingsGrid data={filteredData} onViewDetails={handleViewDetails} />
                </>
            ) : (
                <ListingDetails listing={selectedListing} onClose={closeDetails} />
            )}
        </div>
    );
};

export default App;
