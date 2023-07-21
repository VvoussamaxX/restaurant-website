import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

function PaymentSection() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showPaymentButton, setShowPaymentButton] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    // Perform payment processing here
    setShowConfirmation(true);
  };

  return (
    <section id="payment-section" className="book-a-table">
      <div className="container">
        <div className="section-title">
          <h2>
            <span>Payment</span>
          </h2>
          <br />
          <h4>Complete your payment to confirm your reservation. Payment: $15</h4>
          <h4>Rest of the payment will be made in person.</h4>
        </div>

        {!showConfirmation && !showPaymentButton && (
                    <form className="php-email-form" onSubmit={handlePayment}>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 form-group mt-3">
                            <input type="text" name="name" className="form-control" id="Name on card is required" placeholder="Name on card is required" data-rule="minlen:4" data-msg="Please enter at least 4 chars" required />
                            <div className="validate"></div>
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3">
                            <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" required />
                            <div className="validate"></div>
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3">
                            <input type="text" className="form-control" name="Email" id="Email" placeholder="Email" data-rule="minlen:4" data-msg="Please enter at least 4 chars" required />
                            <div className="validate"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 form-group mt-3">
                            <input type="text" className="form-control" name="card-number" id="card-number" placeholder="Card Number" data-rule="minlen:16" data-msg="Please enter a valid card number (16 digits)" required />
                            <div className="validate"></div>
                        </div>
                        <div className="col-lg-4 form-group mt-3">
                            <input type="text" className="form-control" name="expiration-date" id="expiration-date" placeholder="Expiration Date (MM/YY)" data-rule="minlen:5" data-msg="Please enter a valid expiration date (MM/YY)" required />
                            <div className="validate"></div>
                        </div>
                        <div className="col-lg-4 form-group mt-3">
                            <input type="text" className="form-control" name="cvv" id="cvv" placeholder="CVV" data-rule="minlen:3" data-msg="Please enter a valid CVV (3 digits)" required />
                            <div className="validate"></div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <div className="sent-message">Your delivery order was placed. We will contact you to confirm the order and delivery details. Thank you!</div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                    Checkout
                    </button>
                </form>
        )}

        {showConfirmation && (
          <div>
            <Alert show={showConfirmation} variant="success">
              <Alert.Heading>Order Confirmed!</Alert.Heading>
              <p>Your payment was successfully processed. Thank you for your order!</p>
              <hr />
            </Alert>
          </div>
        )}

        {showPaymentButton && <PaymentSection />}
      </div>
    </section>
  );
}

export default PaymentSection;
