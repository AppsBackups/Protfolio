import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import FeaturesSection from "@/components/FeaturesSection";
import PortfolioSection from "@/components/PortfolioSection";
import Services2Section from "@/components/Services2Section";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Portfolio2 from "@/components/protfolio2";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("#navmenu a");
    const header = document.getElementById("header");

    function handleScroll() {
      let scrollPosition = window.scrollY + 200; // Adjust for header height

      // Update active section based on scroll
      sections.forEach((section) => {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });

      // Apply active class to navbar links without disturbing design
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${activeSection}`) {
          link.classList.add("active");
        }
      });

      // Change navbar background when scrolled
      if (window.scrollY > 100) {
        setIsScrolled(true);
        header.classList.add("scrolled"); // Add a class for CSS
      } else {
        setIsScrolled(false);
        header.classList.remove("scrolled");
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  useEffect(() => {
    // Wait for the DOM to be ready before running JS
    if (typeof window !== "undefined") {
      setTimeout(() => {
        if (window.AOS) {
          window.AOS.init();
        }
      }, 500);
    }
  }, []);

  return (
    <>
      <Head>
        <title>LogixLoop - IT Solutions</title>
        <meta
          name="description"
          content="We provide high-quality mobile and web solutions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Favicons */}
        <link rel="icon" href="/assets/img/favicon.png" />
        <link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png" />

        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&family=Raleway:wght@100;200;300;400;500;600;700;800;900&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Vendor CSS Files */}
        <link
          rel="stylesheet"
          href="/assets/vendor/bootstrap/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/bootstrap-icons/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="/assets/vendor/aos/aos.css" />
        <link
          rel="stylesheet"
          href="/assets/vendor/glightbox/css/glightbox.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/swiper/swiper-bundle.min.css"
        />

        {/* Main CSS File */}
        <link rel="stylesheet" href="/assets/css/main.css" />
      </Head>
      <header
        id="header"
        className="header d-flex align-items-center fixed-top"
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center">
          <a href="/" className="logo d-flex align-items-center me-auto">
          
            <h1 className="sitename">LogixLoop</h1>
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="#hero" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <a className="cta-btn" href="#about">
            Get Started
          </a>
        </div>
      </header>
      <section id="hero" className="hero section dark-background">
        <img src="/assets/img/bg.jpg" alt="Hero" data-aos="fade-in" />
        <div className="container d-flex flex-column align-items-center text-center">
          <h2 data-aos="fade-up" data-aos-delay="100">
            PLAN. LAUNCH. GROW.
          </h2>
          <p data-aos="fade-up" data-aos-delay="200">
            Empowering businesses with innovative IT solutions. From web &
            mobile apps to cloud & automation— we bring your vision to life.
          </p>
          <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
            <a href="#about" className="btn-get-started">
              Get Started
            </a>
            {/*<a
              href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
              className="glightbox btn-watch-video d-flex align-items-center"
            >
              <i className="bi bi-play-circle"></i>
              <span>Watch Video</span>
            </a> */}
          </div>
        </div>
      </section>

      <section id="about" className="about section">
        <div className="container">
          <div className="row gy-4">
            {/* Left Side - Image */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3>Innovating Digital Excellence</h3>
              <img
                src="/assets/img/her0-bg2.png"
                className="img-fluid rounded-4 mb-4"
                alt="About LogixLoop"
              />
            </div>

            {/* Right Side - Content */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="250">
              <div className="content ps-0 ps-lg-5">
                <p className="fst-italic">
                  LogixLoop is a cutting-edge technology firm dedicated to
                  transforming ideas into scalable and efficient digital
                  solutions.
                </p>

                <ul>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Custom Software
                    Development – Building robust, secure, and scalable
                    solutions tailored to business needs.
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Cloud & DevOps
                    Solutions – Optimizing performance, security, and
                    cost-efficiency for seamless operations.
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> UI/UX & Product
                    Design – Crafting intuitive, engaging digital experiences
                    that enhance user satisfaction.
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> AI & Automation
                    – Integrating AI-powered analytics and automation for
                    smarter decision-making.
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> IT Consulting &
                    Strategy – Delivering expert guidance to align technology
                    with long-term business goals.
                  </li>
                </ul>

                <p>
                  At LogixLoop, our team of skilled developers, designers, and
                  strategists work relentlessly to push the boundaries of
                  technology. We collaborate with startups, enterprises, and
                  global brands to deliver impactful, results-driven solutions
                  that foster growth and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />
      <ServicesSection />
      <ClientsSection /> 
      <FeaturesSection />
      <Services2Section />
      <TestimonialsSection />
      {/* <PortfolioSection />*/}
      <Portfolio2/>
      <TeamSection />
      <ContactSection />

      {/* External JavaScript - Load After Page is Interactive */}
      <Script
        src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
        strategy="lazyOnload"
      ></Script>
      <Script
        src="assets/vendor/php-email-form/validate.js"
        strategy="lazyOnload"
      ></Script>
      <Script src="assets/vendor/aos/aos.js" strategy="lazyOnload"></Script>
      <Script
        src="assets/vendor/glightbox/js/glightbox.min.js"
        strategy="lazyOnload"
      ></Script>
      <Script
        src="assets/vendor/purecounter/purecounter_vanilla.js"
        strategy="lazyOnload"
      ></Script>
      <Script
        src="assets/vendor/swiper/swiper-bundle.min.js"
        strategy="lazyOnload"
      ></Script>
      <Script
        src="assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"
        strategy="lazyOnload"
      ></Script>
      <Script
        src="assets/vendor/isotope-layout/isotope.pkgd.min.js"
        strategy="lazyOnload"
      ></Script>
      <Script src="assets/js/main.js" strategy="lazyOnload"></Script>
    </>
  );
}
