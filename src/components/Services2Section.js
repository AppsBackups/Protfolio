const services = [
  {
    icon: "bi-phone",
    title: "Mobile App Development",
    description:
      "We build high-quality native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
    delay: "100",
  },
  {
    icon: "bi-apple",
    title: "iOS Development",
    description:
      "Specialized iOS app development with Swift and Objective-C, following Apple's guidelines to create seamless experiences for iPhone and iPad users.",
    delay: "200",
  },
  {
    icon: "bi-globe",
    title: "Web Development",
    description:
      "Custom web applications and responsive websites built with modern technologies like React, Angular, and Node.js for optimal performance.",
    delay: "300",
  },
  {
    icon: "bi-database",
    title: "Backend Development",
    description:
      "Robust backend systems and APIs development to power your applications, with scalable architecture and cloud integration.",
    delay: "400",
  },
  {
    icon: "bi-shield-check",
    title: "Software Maintenance",
    description:
      "Ongoing support, updates, and maintenance services to keep your software secure, up-to-date, and performing at its best.",
    delay: "500",
  },
  {
    icon: "bi-palette",
    title: "UI/UX Design",
    description:
      "User-centered design services that create intuitive, beautiful interfaces that enhance user engagement and satisfaction.",
    delay: "600",
  },
];

export default function Services2Section() {
  return (
    <section id="services" className="services-2 section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Services</h2>
        <p>COMPREHENSIVE SOFTWARE SOLUTIONS</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {services.map((service, index) => (
            <div 
              className="col-md-6" 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={service.delay}
            >
              <div className="service-item d-flex position-relative h-100">
                <i className={`bi ${service.icon} icon flex-shrink-0`}></i>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">
                      {service.title}
                    </a>
                  </h4>
                  <p className="description">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}