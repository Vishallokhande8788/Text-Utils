import React, { useState } from "react"; 

const ContactUs = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Define dynamic styles based on mode
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "gray" : "white", 
    padding: "20px",
    maxWidth: "500px",
    margin: "0 auto",
    borderRadius: "8px", 
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", 
    
      
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been submitted!");
    setFormData({ name: "", email: "", subject: "", message: "" }); 
  };

  return (
    <div style={myStyle}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyles}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyles}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            style={inputStyles}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={textareaStyles}
          ></textarea>
        </div>
        <button type="submit" style={buttonStyles}>
          Submit
        </button>
      </form>
    </div>
  );
};

const inputStyles = {
  width: "100%",
  padding: "12px",
  marginTop: "5px",
  borderRadius: "4px", 
  border: "1px solid #ccc",
  boxSizing: "border-box",
  transition: "all 0.3s ease",
};

const textareaStyles = {
  width: "100%",
  padding: "12px",
  marginTop: "5px",
  height: "100px",
  borderRadius: "4px", 
  border: "1px solid #ccc",
  boxSizing: "border-box",
  transition: "all 0.3s ease",
};

// Button styles
const buttonStyles = {
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "16px",
  transition: "all 0.3s ease",
};

export default ContactUs;
