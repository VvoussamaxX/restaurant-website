import React, { Fragment } from 'react';
import Menu from './Menu';
import Footer from './Footer';


function Team() {
    return (
        <Fragment>
            <section id="topbar" className="d-flex align-items-center fixed-top topbar-transparent">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-center justify-content-lg-start">
                    <i className="bi bi-phone d-flex align-items-center"><span>+1 869 613 2212</span></i>
                    <i className="bi bi-clock ms-4 d-none d-lg-flex align-items-center"><span>Mon-Sat: 11:00 AM - 23:00 PM</span></i>
                </div>
            </section>
            <Menu />
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
                                        <p className="animate__animated animate__fadeInUp">Join our team of talented chefs and embark on an exciting culinary career. We offer a supportive environment for growth and creativity, where you can unleash your culinary skills and create remarkable dining experiences for our guests.</p>
                                        <div>
                                            <a href="team.html#career" className="btn-menu animate__animated animate__fadeInUp scrollto">Career</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Slide 2 */}
                            <div className="carousel-item" style={{ backgroundImage: "url(assets/img/slide/slide-2.jpg)" }}>
                                <div className="carousel-container">
                                    <div className="carousel-content">
                                        <h2 className="animate__animated animate__fadeInDown">Meet Our Talented Chefs</h2>
                                        <p className="animate__animated animate__fadeInUp">Discover the culinary geniuses behind our delectable dishes. Our team of highly skilled and passionate chefs brings innovation and expertise to every plate. Prepare to be amazed by their extraordinary creations.</p>
                                        <div>
                                            <a href="team.html#chefs" className="btn-menu animate__animated animate__fadeInUp scrollto">Chefs</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Slide 3 */}
                            <div className="carousel-item" style={{ backgroundImage: "url(assets/img/slide/slide-3.jpg)" }}>
                                <div className="carousel-container">
                                    <div className="carousel-content">
                                        <h2 className="animate__animated animate__fadeInDown">Rate Our Chefs</h2>
                                        <p className="animate__animated animate__fadeInUp">We take pride in the skills and talents of our chefs. Help us recognize their dedication and artistry by rating their culinary creations. Your feedback is valuable to us and contributes to the continuous improvement of our dining experience.</p>
                                        <div>
                                            <a href="team.html#rating" className="btn-menu animate__animated animate__fadeInUp scrollto">Rate</a>
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
            <section id="career" className="custom-padding">
                <div className="row align-items-md-stretch">
                    <div className="col-md-6">
                        <div className="h-100 p-5 text-bg rounded-3" style={{ color: 'white', background: '#ffb03b' }}>
                            <h2>Meet Our Team</h2>
                            <p>Get to know the talented individuals who make up our team. Each member brings unique skills and expertise to create memorable dining experiences for our guests.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="h-100 p-5 bg-body-tertiary border rounded-3">
                            <h2>Career Opportunities</h2>
                            <p>Join our team and be part of a dynamic and passionate group of individuals dedicated to delivering exceptional service and culinary excellence. Explore the career opportunities we have available. Send your resume to our email.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="gallery" className="gallery">
                <div className="container-fluid">

                    <div className="section-title">
                        <h2>Some photos from <span>Our Restaurant</span></h2>
                        <p>Explore our captivating gallery showcasing the exquisite ambiance and delectable dishes of our restaurant, offering a delightful experience for all your senses.</p>
                    </div>

                    <div className="row g-0">

                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a href="assets/img/gallery/gallery-1.jpg" className="gallery-lightbox">
                                    <img src="assets/img/gallery/gallery-1.jpg" alt="" className="img-fluid" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a href="assets/img/gallery/gallery-2.jpg" className="gallery-lightbox">
                                    <img src="assets/img/gallery/gallery-2.jpg" alt="" className="img-fluid" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a href="assets/img/gallery/gallery-3.jpg" className="gallery-lightbox">
                                    <img src="assets/img/gallery/gallery-3.jpg" alt="" className="img-fluid" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a href="assets/img/gallery/gallery-4.jpg" className="gallery-lightbox">
                                    <img src="assets/img/gallery/gallery-4.jpg" alt="" className="img-fluid" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a href="assets/img/gallery/gallery-5.jpg" className="gallery-lightbox">
                                    <img src="assets/img/gallery/gallery-5.jpg" alt="" className="img-fluid" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a href="assets/img/gallery/gallery-6.jpg" className="gallery-lightbox">
                                    <img src="assets/img/gallery/gallery-6.jpg" alt="" className="img-fluid" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a href="assets/img/gallery/gallery-7.jpg" className="gallery-lightbox">
                                    <img src="assets/img/gallery/gallery-7.jpg" alt="" className="img-fluid" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a href="assets/img/gallery/gallery-8.jpg" className="gallery-lightbox">
                                    <img src="assets/img/gallery/gallery-8.jpg" alt="" className="img-fluid" />
                                </a>
                            </div>
                        </div>

                    </div>

                </div>

            </section>

            <section id="chefs" className="chefs">
                <div className="container">

                    <div className="section-title">
                        <h2>Our Professional <span>Chefs</span></h2>
                        <p>Discover our talented and passionate chefs who masterfully blend flavors and ingredients, creating culinary masterpieces that delight and satisfy every palate.</p>
                    </div>

                    <div className="row">

                        <div className="col-lg-4 col-md-6">
                            <div className="member">
                                <div className="pic"><img src="assets/img/chefs/chefs-1.jpg" className="img-fluid" alt="" /></div>
                                <div className="member-info">
                                    <h4>Sarah Leps</h4>
                                    <span>Master Chef</span>
                                    <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="member">
                                <div className="pic"><img src="assets/img/chefs/chefs-2.jpg" className="img-fluid" alt="" /></div>
                                <div className="member-info">
                                    <h4>Tomy Bet</h4>
                                    <span>Patissier</span>
                                    <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="member">
                                <div className="pic"><img src="assets/img/chefs/chefs-3.jpg" className="img-fluid" alt="" /></div>
                                <div className="member-info">
                                    <h4>Oumayma Kinani</h4>
                                    <span>Cook</span>
                                    <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section id="rating" className="rating">
                <h2>Rate a Team Member</h2>
                <form>
                    <div className="rating-form-row">
                        <select name="team-member" id="team-member">
                            <option value="Sarah">Sarah Leps</option>
                            <option value="Tom">Tomy Bet</option>
                            <option value="Oumayma">Oumayma Kinani</option>
                        </select>
                        <div className="rating-stars">
                            <input type="radio" id="star5" name="rating" value="5" />
                            <label htmlFor="star5"></label>
                            <input type="radio" id="star4" name="rating" value="4" />
                            <label htmlFor="star4"></label>
                            <input type="radio" id="star3" name="rating" value="3" />
                            <label htmlFor="star3"></label>
                            <input type="radio" id="star2" name="rating" value="2" />
                            <label htmlFor="star2"></label>
                            <input type="radio" id="star1" name="rating" value="1" />
                            <label htmlFor="star1"></label>
                        </div>
                        <input type="submit" value="Submit" style={{ backgroundColor: '#ffb03b', color: 'white' }} />
                    </div>
                </form>
            </section>
            <Footer />

        </Fragment>
    )

}

export default Team;
