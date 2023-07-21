import React, { Fragment } from 'react';
import Menu from './Menu';
import Chatbot from './Chatbot';
import Footer from './Footer';
import ContactUs from './ContactUs';

function Contact() {
    return (
        <Fragment>
            {/* Top Bar */}
            <section id="topbar" className="d-flex align-items-center fixed-top topbar-transparent">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-center justify-content-lg-start">
                    <i className="bi bi-phone d-flex align-items-center"><span>+1 869 613 2212</span></i>
                    <i className="bi bi-clock ms-4 d-none d-lg-flex align-items-center"><span>Mon-Sat: 11:00 AM - 23:00 PM</span></i>
                </div>
            </section>
            <Menu />
            {/* Hero Section */}
            <section id="hero">
                <div className="hero-container">
                    <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">

                        <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

                        <div className="carousel-inner" role="listbox">

                            {/* Slide 1 */}
                            <div className="carousel-item active" style={{ backgroundImage: "url(assets/img/slide/slide-1.jpg)" }}>
                                <div className="carousel-container">
                                    <div className="carousel-content">
                                        <h2 className="animate__animated animate__fadeInDown"><span>Contact Us</span></h2>
                                        <p className="animate__animated animate__fadeInUp">We'd love to hear from you! Get in touch with us for inquiries, reservations, or any other information you need. Visit our restaurant and experience the finest dining in town. We are conveniently located at 370 Rue de Pointe-Gatineau.</p>
                                        <div>
                                            <a href="contact.html#contact" className="btn-menu animate__animated animate__fadeInUp scrollto">Contact</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Slide 2 */}
                            <div className="carousel-item" style={{ backgroundImage: "url(assets/img/slide/slide-2.jpg)" }}>
                                <div className="carousel-container">
                                    <div className="carousel-content">
                                        <h2 className="animate__animated animate__fadeInDown">Share Your Feedback</h2>
                                        <p className="animate__animated animate__fadeInUp">Your feedback is important to us. Let us know about your dining experience and help us serve you better. We strive to create exquisite flavors and memorable moments for our guests. Share your thoughts and let us exceed your expectations.</p>
                                        <div>
                                            <a href="contact.html#testimonials" className="btn-menu animate__animated animate__fadeInUp scrollto">Feedback</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Slide 3 */}
                            <div className="carousel-item" style={{ backgroundImage: "url(assets/img/slide/slide-3.jpg)" }}>
                                <div className="carousel-container">
                                    <div className="carousel-content">
                                        <h2 className="animate__animated animate__fadeInDown">Frequently Asked Questions</h2>
                                        <p className="animate__animated animate__fadeInUp">We have compiled a list of frequently asked questions to provide you with quick answers and information. If you have any queries regarding our services, menu, or reservations, check out our FAQs section. If you can't find what you're looking for, feel free to contact us.</p>
                                        <div>
                                            <a href="contact.html#accordion" className="btn-menu animate__animated animate__fadeInUp scrollto">Questions</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                        </a>

                        <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                            <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                        </a>

                    </div>
                </div>
            </section>
            {/* <!-- End Hero --> */}
            <main id="main">

                {/* Contact Section */}
                <ContactUs />

                <Chatbot />

                <section>
                    <div className="testimonials text-center">
                        <div className="container px-4 px-lg-5 h-100">
                            <h2 style={{ color: "white", fontWeight: "bold" }}>What our customers are saying...</h2>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                        <img className="img-fluid rounded-circle mb-3" src="assets/imgs/Images/t1.jpeg" alt="..." />
                                        <h5>John Smith</h5>
                                        <p className="font-weight-light mb-0">"The food here is amazing! Highly recommended!"</p>
                                        <div className="rating">
                                            <i className="bi bi-star-fill" style={{ color: "#ffb03b" }}></i>
                                            <i className="bi bi-star-fill" style={{ color: "#ffb03b" }}></i>
                                            <i className="bi bi-star-fill" style={{ color: "#ffb03b" }}></i>
                                            <i className="bi bi-star-fill" style={{ color: "#ffb03b" }}></i>
                                            <i className="bi bi-star-fill" style={{ color: "#ffb03b" }}></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                        <img className="img-fluid rounded-circle mb-3" src="assets/imgs/Images/t2.jpeg" alt="..." />
                                        <h5>Jane Doe</h5>
                                        <p className="font-weight-light mb-0">"The service here is exceptional! Will definitely come back again."</p>
                                        <div className="rating">
                                            <i className="bi bi-star-fill" style={{ color: "#ffb03b" }}></i>
                                            <i className="bi bi-star-fill" style={{ color: "#ffb03b" }}></i>
                                            <i className="bi bi-star-fill" style={{ color: "#ffb03b" }}></i>
                                            <i className="bi bi-star-fill" style={{ color: "#ffb03b" }}></i>
                                            <i className="bi bi-star-fill" style={{ color: "#ffb03b" }}></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                        <img className="img-fluid rounded-circle mb-3" src="assets/imgs/Images/t3.jpeg" alt="..." />
                                        <h5>Michael Johnson</h5>
                                        <p className="font-weight-light mb-0">"The ambiance here is perfect for a romantic dinner. Loved it!"</p>
                                        <div className="rating">
                                            <i className="bi bi-star-fill" style={{ color: "#ffb03b" }}></i>
                                            <i className="bi bi-star-fill" style={{ color: "#ffb03b" }}></i>
                                            <i className="bi bi-star-fill" style={{ color: "#ffb03b" }}></i>
                                            <i className="bi bi-star-fill" style={{ color: "#ffb03b" }}></i>
                                            <i className="bi bi-star-fill" style={{ color: "#ffb03b" }}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="my-3" id="accordion">
                    <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                        <h3>Frequently Asked Questions</h3>
                    </div>

                    <div>
                        <div className="bd-example-snippet bd-code-snippet">
                            <div className="bd-example m-0 border-0">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h4 className="accordion-header">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                How can I contact your support team?
                                            </button>
                                        </h4>
                                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>You can reach our support team by sending an email to SavourEats@gmail.com or by filling out the contact form on our website.</strong> Our team will get back to you as soon as possible to assist you with any questions or issues you may have.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h4 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                How long does it take to receive a response?
                                            </button>
                                        </h4>
                                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>We strive to respond to all inquiries within 24 hours.</strong> However, during peak times, it may take slightly longer to receive a response. Rest assured that we value your time and will do our best to provide a timely and helpful resolution to your query.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h4 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Can I request a refund for my purchase?
                                            </button>
                                        </h4>
                                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>We offer a refund policy for eligible purchases.</strong> If you are not satisfied with your purchase or encounter any issues, please contact our support team within 30 days of your purchase, and we will be happy to assist you with the refund process.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                

            </main>
            <Footer />

        </Fragment>
    )

}

export default Contact;
