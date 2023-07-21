import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function ContactUs() {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowConfirmation(true);
    // You can add logic here to send the form data to the server or perform any other actions.
    // For this example, we only show the confirmation message without handling the form submission.
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2><span>Contact</span> Us</h2>
          <p>Contact us to get in touch with our team. We are here to assist you with any inquiries, reservations, or information you may need. Reach out to us and experience our exceptional service and memorable dining experiences.</p>
        </div>
      </div>

      <div className="map">
      <iframe style={{ border: "0", width: "100%", height: "350px" }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc913524a439d7d%3A0x9b9f69b9d2e3d775!2s370+Rue+de+Pointe+Gatineau%2C+Gatineau%2C+QC+J8T+2C1%2C+Canada!5e0!3m2!1sen!2sus!4v1560244495547!5m2!1sen!2sus" allowFullScreen="" title="Restaurant Location"></iframe>
      </div>

      <div className="container mt-5">
      <div className="info-wrap">
          <div className="row">
            <div className="col-lg-3 col-md-6 info">
              <i className="bi bi-geo-alt"></i>
              <h4>Location:</h4>
              <p>370 Rue de Pointe-Gatineau<br />Gatineau, QC J8T 2C1, Canada</p>
            </div>

            <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
              <i className="bi bi-clock"></i>
              <h4>Open Hours:</h4>
              <p>Monday-Saturday:<br />11:00 AM - 23:00 PM</p>
            </div>

            <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
              <i className="bi bi-envelope"></i>
              <h4>Email:</h4>
              <p>SavourEats@gmail.com<br />SavourEats2@gmail.com</p>
            </div>

            <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
              <i className="bi bi-phone"></i>
              <h4>Call:</h4>
              <p>+1 869 613 2212<br />+1 869 613 2213</p>
            </div>
          </div>
        </div>        
        <form onSubmit={handleSubmit} className="php-email-form">
        <div className="row">
            <div className="col-md-6 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
            </div>
          </div>
          <div className="col-md-3 form-group mt-md-0">
            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
          </div>
    
          <div className="form-group mt-3">
            <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
          </div>
                    <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            {showConfirmation && (
              <Alert show={showConfirmation} variant="success">
                <Alert.Heading>Thank You</Alert.Heading>
                <p>Your message has been sent. We will try to answer you by email as soon as possible.</p>
                <hr />
                <div className="d-flex justify-content-end">
                  <Button onClick={() => setShowConfirmation(false)} variant="outline-success">
                    Close
                  </Button>
                </div>
              </Alert>
            )}
          </div>
          <div className="text-center"><button type="submit">Send Message</button></div>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
