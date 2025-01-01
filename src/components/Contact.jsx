import React, { useState } from "react"; 

const ContactUs = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showAlert, setShowAlert] = useState(false); // Track alert visibility

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
    setShowAlert(true); // Show custom alert
    setFormData({ name: "", email: "", subject: "", message: "" }); 

    setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
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

      {showAlert && (
        <div style={modalStyles}>
          <div style={alertContentStyles}>
            <h4>Your message has been successfully submitted!</h4>
          </div>
        </div>
      )}
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

const modalStyles = {
  position: "fixed",
  top: "20px",
  left: "50%",
  transform: "translateX(-50%)", 
  zIndex: "9999", 
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  animation: "fadeInOut 3s ease-in-out",
};

const alertContentStyles = {
  backgroundColor: "#28a745", 
  color: "white",
  padding: "20px 30px",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
  fontSize: "14px",
  textAlign: "center",
  fontWeight: "bold",
  width: "auto",
  maxWidth: "800px",
  animation: "fadeInOut 3s ease-in-out",
};

export default ContactUs;
