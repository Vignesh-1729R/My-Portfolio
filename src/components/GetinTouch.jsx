import React, { useState } from "react";
import "../sass/GetinTouch.scss";
import address from "../assets/address.png";
import mail from "../assets/mail.png";
import phone from "../assets/phone.png";

const GetinTouch = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FormSubmitted", formData);
    setIsSubmitted(true);
  };
  return (
    <div className="get-in-touch">
      <h1>Get In Touch</h1>
      <p>Feel Free to reach out to me for any questions!</p>
      <div className="content-container">
        <div className="lets-make-something">
          <h2>Let's Make Something Together...</h2>
          <div className="contact-item">
            <img src={address} alt="Address Icon" />
            <h6>Address</h6>
            <p>Tamil Nadu, India</p>
          </div>
          <div className="contact-item">
            <img src={mail} alt="Phone Icon" />
            <h6>Phone</h6>
            <p>+91-8610544585</p>
          </div>
          <div className="contact-item">
            <img src={phone} alt="Email Icon" />
            <h6>Email</h6>
            <p>vignesh29071706@gmail.com</p>
          </div>
        </div>

        <div className="form">
          <h5 className={isSubmitted ? "sucess-heading" :""}>
            {isSubmitted ? "Message Sended succesfully!" : "Send a message"}
          </h5>
          {isSubmitted ? (
            <p className="form-sucess-msg">
              Thanks for reaching out we will get back to you soon
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="names">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Type your message..."
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetinTouch;
