import Image from "next/image";

const servicesData = [
  {
    imgSrc: "/assets/img/custom-software.webp",
    icon: "bi bi-code-slash",
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed to meet your business needs, ensuring efficiency, scalability, and innovation.",
    link: "service-details.html",
    delay: 200,
  },
  {
    imgSrc: "/assets/img/cloud-devops.webp",
    icon: "bi bi-cloud-check",
    title: "Cloud & DevOps Solutions",
    description:
      "Seamless cloud migrations, infrastructure automation, and CI/CD pipelines for enhanced scalability and performance.",
    link: "service-details.html",
    delay: 300,
  },
  {
    imgSrc: "/assets/img/ui-ux.webp",
    icon: "bi bi-brush",
    title: "UI/UX & Product Design",
    description:
      "Engaging and user-friendly designs that enhance digital experiences, ensuring intuitive navigation and accessibility.",
    link: "service-details.html",
    delay: 400,
  },
  {
    imgSrc: "/assets/img/web.jpg",
    icon: "bi bi-globe",
    title: "Web Development",
    description:
      "Responsive and modern web solutions tailored to your needs, using the latest technologies to deliver seamless user experiences.",
    link: "service-details.html",
    delay: 500,
  },
  {
    imgSrc: "/assets/img/ai.webp",
    icon: "bi bi-bar-chart",
    title: "AI & Data Analytics",
    description:
      "Leverage AI-driven insights, predictive analytics, and data science to enhance decision-making and business growth.",
    link: "service-details.html",
    delay: 600,
  },
  {
    imgSrc: "/assets/img/mobile.webp",
    icon: "bi bi-phone",
    title: "Mobile App Development",
    description:
      "Innovative mobile solutions for iOS and Android, delivering seamless user experiences and high performance.",
    link: "service-details.html",
    delay: 700,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Services</h2>
        <p>Empowering Businesses with Cutting-Edge IT Solutions</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-5">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="col-xl-4 col-md-6"
              data-aos="zoom-in"
              data-aos-delay={service.delay}
            >
              <div className="service-item">
                <div className="img">
                  <Image
                    src={service.imgSrc}
                    className="img-fluid"
                    alt={service.title}
                    width={500}
                    height={300}
                  />
                </div>
                <div className="details position-relative">
                  <div className="icon">
                    <i className={service.icon}></i>
                  </div>
                  <a href={service.link} className="stretched-link">
                    <h3>{service.title}</h3>
                  </a>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
