import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", comments: "" });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        if (!formData.name || !formData.email || !formData.phone || !formData.comments) {
            return "All fields are required.";
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            return "Invalid email format.";
        }
        if (!/^\d+$/.test(formData.phone)) {
            return "Phone number must contain only digits.";
        }
        return null;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const error = validateForm();
        if (error) {
            setError(error);
            setSuccess(false);
        } else {
            setError("");
            setSuccess(true);
        }
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Contact Agent</h3>
            <input type="text" name="name" placeholder="Full Name" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} />
            <textarea name="comments" placeholder="Comments" onChange={handleChange} />
            <button type="submit">Contact Now</button>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">Message sent successfully!</p>}
        </form>
    );
};

export default ContactForm;
