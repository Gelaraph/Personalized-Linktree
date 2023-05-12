import React from "react";
import sendDiagram from "../assets/diagram.png";

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <h2 className="contact-title">For Collaboration and Hiring</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <br />
          <input type="tel" name="phone" id="phone" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <br />
          <textarea placeholder="Write your message..." id="message"></textarea>
        </div>
        <div className="btn-div">
          <button className="send-btn">Send Message</button>
        </div>
      </form>
      <div className="send-image">
        <img src={sendDiagram} alt="" />
      </div>
    </div>
  );
};

export default Contact;
