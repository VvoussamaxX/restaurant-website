import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import PaymentSection from './PaymentSection';
import DeliveryForm from './DeliveryForm';

function BookATable() {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showPaymentButton, setShowPaymentButton] = useState(false);
    const [showPaymentSection, setShowPaymentSection] = useState(false);

    const handleBookTable = (event) => {
        event.preventDefault();
        setShowConfirmation(true);
    };

    const handleProceedToPayment = () => {
        setShowConfirmation(false);
        setShowPaymentSection(true);
    };

    return (
        <section id="book-a-table" className="book-a-table">
            <div className="container">
                <div className="section-title">
                    <h2>Book a <span>Table</span></h2>
                    <p>Book a table to enjoy our delicious dishes and impeccable service.</p>
                </div>
                {!showConfirmation && !showPaymentButton && (
                    <form onSubmit={handleBookTable} className="php-email-form">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 form-group mt-3">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" required />
                                <div className="validate"></div>
                            </div>
                            <DeliveryForm />
                            <div className="col-lg-4 col-md-6 form-group mt-3 ">
                                <input type="text" className="form-control" name="phone" id="phone" placeholder="Your age" data-rule="minlen:4" data-msg="Please enter at least 4 chars" required />
                                <div className="validate"></div>
                            </div>
                            <div className="col-lg-4 col-md-6 form-group mt-3 ">
                                <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" required />
                                <div className="validate"></div>
                            </div>
                            <div className="col-lg-4 col-md-6 form-group mt-3 ">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" required />
                                <div className="validate"></div>
                            </div>
                            <div className="col-lg-4 col-md-6 form-group mt-3">
                                <input type="number" className="form-control" name="people" id="people" placeholder="# of people" data-rule="minlen:1" data-msg="Please enter at least 1 char" required />
                                <div className="validate"></div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3">
                            <select name="team-member" id="team-member">
                                <option value="No_Special_Event">No Special Event</option>
                                <option value="Custom_Parties">Custom Parties</option>
                                <option value="Private_Parties">Private Parties</option>
                                <option value="Birthday_Parties">Birthday Parties</option>
                            </select>
                            <div className="validate"></div>
                        </div>
                        <div className="form-group mt-3">
                            <textarea className="form-control" name="message" rows="5" placeholder="Message"></textarea>
                            <div className="validate"></div>
                        </div>
                        <div className="mb-3">
                            <div className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
                        </div>
                        <div className="text-center">
                            <button type="submit">Send</button>
                        </div>
                    </form>
                )}

                {showConfirmation && (
                    <Alert show={showConfirmation} variant="success">
                        <Alert.Heading>Thank You</Alert.Heading>
                        <p>Your booking request has been received!</p>
                        <hr />
                        <div className="d-flex justify-content-end">
                            <a href="#payment-section" className="btn-menu animate__animated animate__fadeInUp scrollto">Proceed to Payment</a>
                        </div>
                    </Alert>
                )}

                {showPaymentSection && <PaymentSection />}
            </div>
        </section>
    );
}

export default BookATable;
