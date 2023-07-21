
import React, { Fragment, useState } from 'react';
import Menu from './Menu';
import Menus from './Menus';
import Footer from './Footer';
import BookATable from './BookATable';
import DeliveryOrder from './DeliveryOrder';
import PaymentSection from './PaymentSection';



function Services() {
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
            <section id="hero">
                <div className="hero-container">
                    <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">

                        <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

                        <div className="carousel-inner" role="listbox">

                            {/* Slide 1 */}

                            <div className="carousel-item active" style={{ backgroundImage: 'url(assets/img/slide/slide-1.jpg)' }}>
                                <div className="carousel-container">
                                    <div className="carousel-content">
                                        <h2 className="animate__animated animate__fadeInDown"><span>Menu</span></h2>
                                        <p className="animate__animated animate__fadeInUp">Indulge in our exquisite menu offerings that showcase a perfect blend of flavors. From appetizers to main courses and delectable desserts, our menu is crafted with the freshest ingredients and culinary expertise. Explore our menu and embark on a culinary journey like no other.</p>
                                        <div>
                                            <a href="services.html#menu" className="btn-menu animate__animated animate__fadeInUp scrollto">View Menu</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Slide 2 */}
                            <div className="carousel-item" style={{ backgroundImage: 'url(assets/img/slide/slide-2.jpg)' }}>
                                <div className="carousel-container">
                                    <div className="carousel-content">
                                        <h2 className="animate__animated animate__fadeInDown">Events</h2>
                                        <p className="animate__animated animate__fadeInUp">Experience extraordinary events that combine exceptional cuisine with a captivating ambiance. From themed nights to live performances, our events offer a memorable dining experience. Discover our upcoming events and create unforgettable moments with us.</p>
                                        <div>
                                            <a href="services.html#events" className="btn-menu animate__animated animate__fadeInUp scrollto">Our Events</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Slide 3 */}
                            <div className="carousel-item" style={{ backgroundImage: 'url(assets/img/slide/slide-3.jpg)' }}>
                                <div className="carousel-container">
                                    <div className="carousel-content">
                                        <h2 className="animate__animated animate__fadeInDown">Easy Booking</h2>
                                        <p className="animate__animated animate__fadeInUp">Make your dining experience hassle-free with our easy booking process. Whether it's a romantic dinner for two or a group celebration, our convenient booking system ensures a seamless experience. Reserve your table now and get ready for an unforgettable culinary journey.</p>
                                        <div>
                                            <a href="services.html#book-a-table" className="btn-menu animate__animated animate__fadeInUp scrollto">Book a Table</a>
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

            <main id="main">
                {/* Menu Section */}
                <Menus />
                <section id="specials" className="specials">
                    <div className="container">
                        <div className="section-title">
                            <h2>Check our <span>Specials</span></h2>
                            <p>Discover our featured dishes and drinks carefully crafted for your enjoyment.</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-3">
                                <ul className="nav nav-tabs flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">Grilled Salmon Fillet</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab-2">Beef Steak</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab-3">Shrimp Salad</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab-4">Bolognese Spaghetti</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab-5">Chocolate Fondant</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-9 mt-4 mt-lg-0">
                                <div className="tab-content">
                                    <div className="tab-pane active show" id="tab-1">
                                        <div className="row">
                                            <div className="col-lg-8 details order-2 order-lg-1">
                                                <h3>Grilled Salmon Fillet</h3>
                                                <p className="fst-italic">Succulent grilled salmon fillet served with a side of roasted vegetables.</p>
                                                <p>Indulge in the exquisite flavors of our grilled salmon fillet. The perfectly cooked salmon is seasoned to perfection and grilled to achieve a deliciously flaky texture. Served with a medley of roasted vegetables, this dish offers a harmonious blend of flavors and a healthy choice for seafood enthusiasts.</p>
                                            </div>
                                            <div className="col-lg-4 text-center order-1 order-lg-2">
                                                <img src="assets/img/specials-1.jpg" alt="Grilled Salmon" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab-2">
                                        <div className="row">
                                            <div className="col-lg-8 details order-2 order-lg-1">
                                                <h3>Beef Steak</h3>
                                                <p className="fst-italic">Juicy and tender beef steak served with your choice of sauce and side.</p>
                                                <p>Experience the ultimate satisfaction with our succulent beef steak. Each cut is carefully selected and cooked to your preferred doneness, ensuring a juicy and flavorful dining experience. Whether you prefer it medium-rare or well-done, our steak is a carnivore's delight. Served with a choice of delectable sauces and a side of your choice, it's a classic dish that never disappoints.</p>
                                            </div>
                                            <div className="col-lg-4 text-center order-1 order-lg-2">
                                                <img src="assets/img/specials-2.jpg" alt="Beef Steak" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab-3">
                                        <div className="row">
                                            <div className="col-lg-8 details order-2 order-lg-1">
                                                <h3>Shrimp Salad</h3>
                                                <p className="fst-italic">Fresh and vibrant shrimp salad tossed with crisp greens and zesty dressing.</p>
                                                <p>Enjoy a refreshing and light salad packed with flavor. Our shrimp salad features plump and succulent shrimp, combined with a variety of crisp greens and vibrant vegetables. Tossed in a zesty dressing, every bite delivers a burst of freshness. It's the perfect choice for those seeking a lighter yet satisfying meal option.</p>
                                            </div>
                                            <div className="col-lg-4 text-center order-1 order-lg-2">
                                                <img src="assets/img/specials-3.jpg" alt="Shrimp Salad" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab-4">
                                        <div className="row">
                                            <div className="col-lg-8 details order-2 order-lg-1">
                                                <h3>Bolognese Spaghetti</h3>
                                                <p className="fst-italic">Classic Italian dish featuring al dente spaghetti served with rich and savory bolognese sauce.</p>
                                                <p>Experience the authentic flavors of Italy with our hearty spaghetti bolognese. The al dente spaghetti is paired with a flavorful bolognese sauce made from a perfect blend of ground beef, tomatoes, herbs, and spices. Each bite is a symphony of tastes that will transport you to the streets of Italy. It's a timeless favorite that never fails to satisfy.</p>
                                            </div>
                                            <div className="col-lg-4 text-center order-1 order-lg-2">
                                                <img src="assets/img/specials-4.jpg" alt="Spaghetti Bolognese" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab-5">
                                        <div className="row">
                                            <div className="col-lg-8 details order-2 order-lg-1">
                                                <h3>Chocolate Fondant</h3>
                                                <p className="fst-italic">Decadent chocolate fondant with a molten center, served with a scoop of vanilla ice cream.</p>
                                                <p>Indulge in a heavenly dessert with our rich and velvety chocolate fondant. The outer layer boasts a delicate cake-like texture, while the center oozes with warm, gooey chocolate. Served with a generous scoop of creamy vanilla ice cream, it's a match made in dessert heaven. The combination of warm and cold, coupled with the divine chocolate flavors, will leave you craving for more.</p>
                                            </div>
                                            <div className="col-lg-4 text-center order-1 order-lg-2">
                                                <img src="assets/img/specials-5.jpg" alt="Chocolate Fondant" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="events" className="events">
                    <div className="container">
                        <div className="section-title">
                            <h2>Organize Your <span>Events</span> in our Restaurant</h2>
                        </div>

                        <div className="row event-item">
                            <div className="col-lg-6">
                                <img src="assets/img/event-birthday.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 content">
                                <h3>Birthday Parties</h3>
                                <div className="price">
                                    <p><span>$189</span></p>
                                </div>
                                <p className="fst-italic">
                                    Celebrate your special day with a memorable birthday party in our restaurant.
                                </p>
                                <ul>
                                    <li><i className="bi bi-check-circle"></i> Customized party decorations and themes.</li>
                                    <li><i className="bi bi-check-circle"></i> Personalized menu options to suit your preferences.</li>
                                    <li><i className="bi bi-check-circle"></i> Dedicated event staff to ensure a seamless experience.</li>
                                </ul>
                                <p>
                                    Make your birthday unforgettable with our top-notch service and exceptional dining experience. We take
                                    care of all the details, allowing you to relax and enjoy your special day to the fullest.
                                </p>
                            </div>
                        </div>

                        <div className="row event-item">
                            <div className="col-lg-6">
                                <img src="assets/img/event-private.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 content">
                                <h3>Private Parties</h3>
                                <div className="price">
                                    <p><span>$290</span></p>
                                </div>
                                <p className="fst-italic">
                                    Host an exclusive private party in our restaurant for a truly personalized experience.
                                </p>
                                <ul>
                                    <li><i className="bi bi-check-circle"></i> Customizable event space to accommodate your guest list.</li>
                                    <li><i className="bi bi-check-circle"></i> Tailored menu options curated by our expert chefs.</li>
                                    <li><i className="bi bi-check-circle"></i> Professional event planning assistance for a seamless execution.</li>
                                </ul>
                                <p>
                                    Whether it's a corporate gathering, family reunion, or any special occasion, our private party service offers
                                    privacy, flexibility, and a touch of elegance. Leave a lasting impression on your guests with our exceptional
                                    hospitality and exquisite cuisine.
                                </p>
                            </div>
                        </div>

                        <div className="row event-item">
                            <div className="col-lg-6">
                                <img src="assets/img/event-custom.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 content">
                                <h3>Custom Parties</h3>
                                <div className="price">
                                    <p><span>$99</span></p>
                                </div>
                                <p className="fst-italic">
                                    Create a unique and tailored event experience with our custom party service.
                                </p>
                                <ul>
                                    <li><i className="bi bi-check-circle"></i> Flexibility to design your own event concept and theme.</li>
                                    <li><i className="bi bi-check-circle"></i> Personalized menu creation based on your preferences and dietary needs.</li>
                                    <li><i className="bi bi-check-circle"></i> Professional guidance from our event experts to bring your vision to life.</li>
                                </ul>
                                <p>
                                    With our custom party service, you have the freedom to craft an event that reflects your individual style and preferences.
                                    From intimate gatherings to extravagant celebrations, we ensure every detail is meticulously executed to create an unforgettable
                                    experience for you and your guests.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <BookATable />
                <DeliveryOrder />
                <PaymentSection />
        
            </main>
            <Footer />
        </Fragment>
    );
}

export default Services;
