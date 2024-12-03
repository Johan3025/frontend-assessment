import { useState } from "react";

const ListingDetails = ({ listing, onClose }) => {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        comments: "",
      });

      const [errors, setErrors] = useState({});
      const [successMessage, setSuccessMessage] = useState("");

      const validate = () => {
        const newErrors = {};
        if (!formData.fullName) newErrors.fullName = "Full Name is required.";

        if (!formData.email) {
          newErrors.email = "Email is required.";
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
          newErrors.email = "Invalid email format.";
        }
        if (!formData.phone) {
          newErrors.phone = "Phone number is required.";
        } else if (!/^\d+$/.test(formData.phone)) {
          newErrors.phone = "Phone number should only contain numbers.";
        }
        if (!formData.comments) newErrors.comments = "Comments are required.";
    
        return newErrors;
      };


      const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          setSuccessMessage("");
        } else {
          setErrors({});
          setSuccessMessage("Message sent successfully!");
          setFormData({ fullName: "", email: "", phone: "", comments: "" }); // Limpiar los campos
        }
      };



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



    return (
      <div className="listing-details">
      
        
        {/* Sección izquierda: Imagen y detalles principales */}
        <div className="details-left">

        <div className="details-header">
            <div className="details-title">
                <h2>{listing.Title}</h2>
                <p>{listing.Location}</p>
            </div>
            <div className="details-price">
                <p>${listing["Sale Price"].toLocaleString()}</p>
                <p>
                Date Listed:{" "}
                {new Date(listing.DateListed).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                })}
                </p>
            </div>
        </div>


          <div className="details-body">
            <img src={listing.PictureURL} alt={listing.Title} />
          </div>

               
            <div className="details-data">
              <div>
                <span>{listing.Bedrooms}</span>
                <small>BED</small>
              </div>

              <div>
                <span>{listing.Bathrooms}</span>
                <small>BATH</small>
              </div>

              <div>
                <span>{listing.Parking}</span>
                <small>PARKING</small>
              </div>

              <div>
                <span>{listing.Sqft}</span>
                <small>SQFT</small>
              </div>

              <div>
                <span>{listing.YearBuilt}</span>
                <small>YEAR BUILT</small>
              </div>
              
            </div>
            <p>{listing.Description}</p>
          
        </div>
  
        {/* Sección derecha: Botón Save Property y formulario */}
        <div className="details-right">

          {/* Botón Save Property */}
          <div className="button-container">

            <button className="save-property-btn">
                <img src="heart-icon.png" alt="Save" /> {/* Cambia "heart-icon.png" por la ruta correcta */}
                Save Property
            </button>

            <button className="close-btn" onClick={onClose}>X</button>

          </div>
  
         {/* Formulario Contact Agent */}
         <div className="contact-form">

          <h3>Contact Agent</h3>

          <form onSubmit={handleSubmit}>

            {errors.fullName && <p className="error">{errors.fullName}</p>}
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
            
            {errors.email && <p className="error">{errors.email}</p>}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />

            {errors.phone && <p className="error">{errors.phone}</p>}
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            {errors.comments && <p className="error">{errors.comments}</p>}
            <textarea
              name="comments"
              placeholder="Comments"
              value={formData.comments}
              onChange={handleChange}
            ></textarea>

            <button type="submit">Contact Now</button>
          </form>
          {successMessage && <p className="success">{successMessage}</p>}
        </div>
      </div>
    </div>
  );
};
  
  

export default ListingDetails;
