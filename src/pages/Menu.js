import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Isotope from 'isotope-layout';
import Swiper from 'swiper';
import { FaHome, FaChevronDown } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import { BiList, BiChat } from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import { RiTeamFill, RiContactsFill } from 'react-icons/ri';
import { GiKnifeFork } from 'react-icons/gi'; // Icône pour SavourEats

function Menu() {
    const initMenuScript = () => {
        (function() {          
            /**
             * Easy selector helper function
             */
             const select = (el, all = false) => {
                el = el.trim();
              
                if (!el) {
                  console.error('Empty selector provided:', el);
                  return null;
                }
              
                if (all) {
                  const elements = [...document.querySelectorAll(el)];
                  if (elements.length === 0) {
                    console.error('No elements found for selector:', el);
                  }
                  return elements;
                } else {
                  const element = document.querySelector(el);
                  if (!element) {
                    console.error('No element found for selector:', el);
                  }
                  return element;
                }
              };
              
            /**
             * Easy event listener function
             */
            const on = (type, el, listener, all = false) => {
              let selectEl = select(el, all)
              if (selectEl) {
                if (all) {
                  selectEl.forEach(e => e.addEventListener(type, listener))
                } else {
                  selectEl.addEventListener(type, listener)
                }
              }
            }
          
            /**
             * Easy on scroll event listener 
             */
            const onscroll = (el, listener) => {
              el.addEventListener('scroll', listener)
            }
          
            /**
             * Navbar links active state on scroll
             */
            let navbarlinks = select('#navbar .scrollto', true)
            const navbarlinksActive = () => {
              let position = window.scrollY + 200
              navbarlinks.forEach(navbarlink => {
                if (!navbarlink.hash) return
                let section = select(navbarlink.hash)
                if (!section) return
                if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                  navbarlink.classList.add('active')
                } else {
                  navbarlink.classList.remove('active')
                }
              })
            }
            window.addEventListener('load', navbarlinksActive)
            onscroll(document, navbarlinksActive)
          
            /**
             * Scrolls to an element with header offset
             */
            const scrollto = (el) => {
              let header = select('#header')
              let offset = header.offsetHeight
          
              let elementPos = select(el).offsetTop
              window.scrollTo({
                top: elementPos - offset,
                behavior: 'smooth'
              })
            }
          
            /**
             * Toggle .header-scrolled class to #header when page is scrolled
             */
            let selectHeader = select('#header')
            let selectTopbar = select('#topbar')
            if (selectHeader) {
              const headerScrolled = () => {
                if (window.scrollY > 100) {
                  selectHeader.classList.add('header-scrolled')
                  if (selectTopbar) {
                    selectTopbar.classList.add('topbar-scrolled')
                  }
                } else {
                  selectHeader.classList.remove('header-scrolled')
                  if (selectTopbar) {
                    selectTopbar.classList.remove('topbar-scrolled')
                  }
                }
              }
              window.addEventListener('load', headerScrolled)
              onscroll(document, headerScrolled)
            }
          
            /**
             * Back to top button
             */
            let backtotop = select('.back-to-top')
            if (backtotop) {
              const toggleBacktotop = () => {
                if (window.scrollY > 100) {
                  backtotop.classList.add('active')
                } else {
                  backtotop.classList.remove('active')
                }
              }
              window.addEventListener('load', toggleBacktotop)
              onscroll(document, toggleBacktotop)
            }
          
            /**
             * Mobile nav toggle
             */
            on('click', '.mobile-nav-toggle', function(e) {
              select('#navbar').classList.toggle('navbar-mobile')
              this.classList.toggle('bi-list')
              this.classList.toggle('bi-x')
            })
          
            /**
             * Mobile nav dropdowns activate
             */
            on('click', '.navbar .dropdown > a', function(e) {
              if (select('#navbar').classList.contains('navbar-mobile')) {
                e.preventDefault()
                this.nextElementSibling.classList.toggle('dropdown-active')
              }
            }, true)
          
            /**
             * Scrool with ofset on links with a class name .scrollto
             */
            on('click', '.scrollto', function(e) {
              if (select(this.hash)) {
                e.preventDefault()
          
                let navbar = select('#navbar')
                if (navbar.classList.contains('navbar-mobile')) {
                  navbar.classList.remove('navbar-mobile')
                  let navbarToggle = select('.mobile-nav-toggle')
                  navbarToggle.classList.toggle('bi-list')
                  navbarToggle.classList.toggle('bi-x')
                }
                scrollto(this.hash)
              }
            }, true)
          
            /**
             * Scroll with ofset on page load with hash links in the url
             */
            window.addEventListener('load', () => {
              if (window.location.hash) {
                if (select(window.location.hash)) {
                  scrollto(window.location.hash)
                }
              }
            });
          
            /**
             * Hero carousel indicators
             */
            let heroCarouselIndicators = select("#hero-carousel-indicators")
            let heroCarouselItems = select('#heroCarousel .carousel-item', true)
          
            heroCarouselItems.forEach((item, index) => {
              (index === 0) ?
              heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
                heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
            });
          
            /**
             * Menu isotope and filter
             */
            window.addEventListener('load', () => {
              let menuContainer = select('.menu-container');
              if (menuContainer) {
                let menuIsotope = new Isotope(menuContainer, {
                  itemSelector: '.menu-item',
                  layoutMode: 'fitRows'
                });
          
                let menuFilters = select('#menu-flters li', true);
          
                on('click', '#menu-flters li', function(e) {
                  e.preventDefault();
                  menuFilters.forEach(function(el) {
                    el.classList.remove('filter-active');
                  });
                  this.classList.add('filter-active');
          
                  menuIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                  });
          
                }, true);
              }
          
            });
          
            /**
             * Testimonials slider
             */
            new Swiper('.events-slider', {
              speed: 600,
              loop: true,
              autoplay: {
                delay: 5000,
                disableOnInteraction: false
              },
              slidesPerView: 'auto',
              pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
              }
            });
          
            /**
             * Testimonials slider
             */
            new Swiper('.testimonials-slider', {
              speed: 600,
              loop: true,
              autoplay: {
                delay: 5000,
                disableOnInteraction: false
              },
              slidesPerView: 'auto',
              pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
              }
            });
          
          })()
    };
  
    useEffect(() => {
      initMenuScript();
    }, []);
  
  return (
    <Fragment>
      {/* Header */}
      <header id="header" className="fixed-top d-flex align-items-center header-transparent">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <div className="logo me-auto">
            <h1>
              <GiKnifeFork style={{ color: 'white' }} /> <Link to="/">SavourEats</Link>
            </h1>
            <Link to="/">
              <img src="assets/img/logo.png" alt="" className="img-fluid" />
            </Link>
          </div>


          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <Link className="nav-link scrollto active" to="/">
                  <FaHome /> Home
                </Link>
              </li>
              <li className="dropdown">
                <Link to="/services">
                  <span>Our Services</span> <IoIosArrowDown />
                </Link>
                <ul>
                  <li className="dropdown">
                    <HashLink to="/services#menu">
                      <span>Menu</span>
                    </HashLink>
                  </li>
                  <li className="dropdown">
                    <HashLink to="/services#specials">
                      <span>Specials</span>
                    </HashLink>
                  </li>
                  <li className="dropdown">
                    <HashLink to="/services#events">
                      <span>Events</span>
                    </HashLink>
                  </li>
                  <li className="dropdown">
                    <HashLink to="/services#book-a-table">
                      <span>Book Now</span>
                    </HashLink>
                  </li>
                  <li className="dropdown">
                    <HashLink to="/services#Delivery">
                      <span>Delivery</span>
                    </HashLink>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <Link to="/team">
                  <RiTeamFill /> <span>Team</span> <IoIosArrowDown />
                </Link>
                <ul>
                  <li className="dropdown">
                    <HashLink to="/team#career">
                      <span>Career</span>
                    </HashLink>
                  </li>
                  <li className="dropdown">
                    <HashLink to="/team#gallery">
                      <span>Gallery</span>
                    </HashLink>
                  </li>
                  <li className="dropdown">
                    <HashLink to="/team#chefs">
                      <span>Chefs</span>
                    </HashLink>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <Link to="/contact">
                  <RiContactsFill /> <span>Contact</span> <IoIosArrowDown />
                </Link>
                <ul>
                  <li className="dropdown">
                    <HashLink to="/contact#contact">
                      <span>Contact Us</span>
                    </HashLink>
                  </li>
                  <li className="dropdown">
                    <HashLink to="/contact#testimonials">
                      <span>Feedback</span>
                    </HashLink>
                  </li>
                  <li className="dropdown">
                    <HashLink to="/contact#accordion">
                      <span>Questions</span>
                    </HashLink>
                  </li>
                </ul>
              </li>
            </ul>
            <AiOutlineMenu className="mobile-nav-toggle" />
          </nav>
          <HashLink className="book-a-table-btn scrollto" to="/contact#chat">
            <BiChat /> <span>Chat with us</span>
          </HashLink>
        </div>
      </header>
      {/* End Header */}
    </Fragment>
  );
}

export default Menu;
