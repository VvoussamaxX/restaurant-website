
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import PaymentSection from './PaymentSection';
import DeliveryForm from './DeliveryForm';

function DeliveryOrder() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showPaymentSection, setShowPaymentSection] = useState(false);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    setShowConfirmation(true);
  };

  const handleProceedToPayment = () => {
    setShowConfirmation(false);
    setShowPaymentSection(true);
  };

  return (
    <section id="Delivery" className="book-a-table">
      <div className="container">
        <div className="section-title">
          <h2>Order <span>Food Delivery</span></h2>
          <p>Place your order for delicious food delivery right to your doorstep.</p>
        </div>
        {!showConfirmation && !showPaymentSection && (
                    <form onSubmit={handlePlaceOrder} className="php-email-form">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 form-group">
                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" required/>
                            <div className="validate"></div>
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" required/>
                            <div className="validate"></div>
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                            <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" required/>
                            <div className="validate"></div>
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3">
                            <input type="text" name="address" className="form-control" id="address" placeholder="Delivery Address" data-rule="minlen:10" data-msg="Please enter at least 10 chars" required/>
                            <div className="validate"></div>
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3">
                            <input type="text" className="form-control" name="postal-code" id="postal-code" placeholder="Postal Code" data-rule="minlen:4" data-msg="Please enter at least 4 chars" required/>
                            <div className="validate"></div>
                        </div>
                       <DeliveryForm/>
                        <div className="col-lg-6 form-group mt-3">
                            <textarea className="form-control" name="order-details" rows="5" placeholder="Order Details"></textarea>
                            <div className="validate"></div>
                        </div>
                        <div className="col-lg-6 form-group mt-3">
                            <textarea className="form-control" name="special-instructions" rows="5" placeholder="Special Instructions"></textarea>
                            <div className="validate"></div>
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <textarea className="form-control" name="message" rows="5" placeholder="Message (optional)"></textarea>
                        <div className="validate"></div>
                    </div>
                    <div className="mb-3">
                        <div className="sent-message">Your delivery order was placed. We will contact you to confirm the order and delivery details. Thank you!</div>
                    </div>
                <button type="submit" className="btn btn-primary">
                    Place Order
                </button>
            </form>
        )}

        {showConfirmation && (
          <div>
            <Alert show={showConfirmation} variant="success">
              <Alert.Heading>Order Confirmed!</Alert.Heading>
              <p>Your delivery order was placed. We will contact you to confirm the order and delivery details. Thank you!</p>
              <hr />
              <div className="d-flex justify-content-end">
                <Button onClick={handleProceedToPayment} variant="outline-success">
                  Proceed to Payment
                </Button>
              </div>
            </Alert>
          </div>
        )}

        {showPaymentSection && <PaymentSection />}
      </div>
    </section>
  );
}

export default DeliveryOrder;