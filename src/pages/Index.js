import React, { Fragment } from 'react';
import Menu from './Menu';
import Footer from './Footer';

function Index() {
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
                                        <h2 className="animate__animated animate__fadeInDown"><span>SavourEats</span></h2>
                                        <p className="animate__animated animate__fadeInUp">Experience the finest dining in town. We offer a diverse range of culinary delights made with the freshest ingredients. Enjoy a memorable dining experience with exceptional service.</p>
                                        <div>
                                            <a href="index.html#about" className="btn-menu animate__animated animate__fadeInUp scrollto">About Us</a>
                                            <a href="index.html#why-us" className="btn-menu animate__animated animate__fadeInUp scrollto">Why Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Slide 2 */}
                            <div className="carousel-item" style={{ backgroundImage: "url(assets/img/slide/slide-2.jpg)" }}>
                                <div className="carousel-container">
                                    <div className="carousel-content">
                                        <h2 className="animate__animated animate__fadeInDown">Experience Exquisite Flavors</h2>
                                        <p className="animate__animated animate__fadeInUp">Indulge in our tantalizing dishes that showcase a perfect blend of flavors. Our culinary experts create culinary masterpieces that will leave you wanting more. Discover the true essence of fine dining.</p>
                                        <div>
                                        <a href="index.html#about" className="btn-menu animate__animated animate__fadeInUp scrollto">About Us</a>
                                        <a href="index.html#why-us" className="btn-menu animate__animated animate__fadeInUp scrollto">Why Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Slide 3 */}
                            <div className="carousel-item" style={{ backgroundImage: "url(assets/img/slide/slide-3.jpg)" }}>
                                <div className="carousel-container">
                                    <div className="carousel-content">
                                        <h2 className="animate__animated animate__fadeInDown">Immerse in Culinary Delights</h2>
                                        <p className="animate__animated animate__fadeInUp">Let our expert chefs take you on a culinary journey like no other. Experience the perfect blend of taste, presentation, and ambiance. Unwind and savor the exquisite flavors that will make your dining experience unforgettable.</p>
                                        <div>
                                        <a href="index.html#about" className="btn-menu animate__animated animate__fadeInUp scrollto">About Us</a>
                                        <a href="index.html#why-us" className="btn-menu animate__animated animate__fadeInUp scrollto">Why Us</a>
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
            </section>{/* <!-- End Hero --> */}

            <main id="main">
                {/* About Section */}
                <section id="about" className="about">
                    <div className="container-fluid">

                        <div className="row">

                            <div className="col-lg-5 align-items-stretch video-box" style={{ backgroundImage: 'url("assets/img/about.jpg")' }}>
                                <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
                            </div>

                            <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">

                                <div className="content">
                                    <h3>Discover the Art of Fine Dining</h3>
                                    <p>
                                        Experience the epitome of culinary craftsmanship at our restaurant. Our mission is to create an extraordinary dining experience that delights all your senses. We believe in using only the finest ingredients to craft exquisite dishes that leave a lasting impression.
                                    </p>
                                    <p className="fst-italic">
                                        Immerse yourself in our refined ambiance and let our dedicated team of professionals take care of your every need. Indulge in the perfect harmony of flavors, textures, and aromas as we redefine the art of fine dining.
                                    </p>
                                    <ul>
                                        <li><i className="bx bx-check-double"></i> Impeccable attention to detail and dedication to quality.</li>
                                        <li><i className="bx bx-check-double"></i> Exquisite dishes prepared by our talented culinary experts.</li>
                                        <li><i className="bx bx-check-double"></i> Immerse yourself in our elegant ambiance and exceptional service.</li>
                                    </ul>
                                    <p>
                                        Our commitment to excellence extends beyond the plate. We strive to provide a warm and inviting atmosphere where every guest feels like a VIP. Come and join us for an unforgettable dining experience.
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>
                </section>{/* End About Section */}

                {/* Whu Us Section */}
                <section id="why-us" className="why-us">
                    <div className="container">

                        <div className="section-title">
                            <h2>Why Choose <span>Our Restaurant</span></h2>
                            <p>Discover the reasons why our restaurant stands out from the rest. We pride ourselves on delivering an exceptional dining experience that exceeds your expectations.</p>
                        </div>

                        <div className="row">

                            <div className="col-lg-4">
                                <div className="box">
                                    <span>01</span>
                                    <h4>Exquisite Culinary Creations</h4>
                                    <p>Indulge in a gastronomic journey with our expertly crafted dishes. Our culinary team combines passion and creativity to bring you a symphony of flavors that will delight your taste buds.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 mt-4 mt-lg-0">
                                <div className="box">
                                    <span>02</span>
                                    <h4>Elegant Ambiance</h4>
                                    <p>Step into a world of elegance and sophistication. Our restaurant boasts a stylish and inviting atmosphere, providing the perfect backdrop for an unforgettable dining experience.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 mt-4 mt-lg-0">
                                <div className="box">
                                    <span>03</span>
                                    <h4>Attentive Service</h4>
                                    <p>We believe that exceptional service is the key to creating memorable moments. Our dedicated staff is committed to providing personalized attention and ensuring that your every need is met.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>{/* End Why Us Section */}

            </main>
            {/* <!-- End #main --> */}
            <Footer />



        </Fragment>
    )

}

export default Index;