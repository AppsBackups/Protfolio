import Image from "next/image";
import { useState } from "react";

const features = [
  {
    id: "features-tab-1",
    icon: "bi bi-code-slash",
    title: "MERN Stack Development",
    heading: "Powerful & Scalable Web Applications with React & Node.js",
    description: [
      "Our expertise in the MERN stack ensures high-performance, scalable, and modern web applications.",
      "Frontend Excellence: React.js, Redux (Saga, Thunk), Material UI, Next.js, TypeScript, Microfrontends, SEO Optimization, Cypress Testing, and Figma-to-Code implementations.",
      "Backend Powerhouse: Node.js, Express.js, Nest.js, REST & GraphQL APIs, Microservices, and serverless architectures with AWS Lambda.",
      "Database Management: MongoDB, DynamoDB, PostgreSQL, MySQL, and scalable cloud storage solutions.",
    ],
    image: "/assets/img/pic-02.jpg",
  },
  {
    id: "features-tab-2",
    icon: "bi bi-server",
    title: "Laravel + Node + Python Backend",
    heading: "Versatile & Secure Backend Solutions for Every Business Need",
    description: [
      "We specialize in creating robust, secure, and high-performing backend solutions using the best technologies.",
      "PHP & Laravel: Enterprise-grade API development, authentication systems (OAuth2, JWT), and performance-optimized database management.",
      "Node.js & Express: Real-time applications, WebSockets, scalable microservices, and seamless cloud integration.",
      "Python & FastAPI: AI-powered solutions, data analysis pipelines, machine learning models, and automation scripts.",
    ],
    image: "/assets/img/pic-04.jpg",
  },
  {
    id: "features-tab-3",
    icon: "bi bi-phone",
    title: "Android & iOS Native Development",
    heading: "Custom Mobile Applications for Seamless User Experiences",
    description: [
      "We build intuitive, high-performance mobile applications for Android & iOS, delivering a seamless digital experience.",
      "Android Development: Kotlin & Java, Jetpack Compose, MVVM architecture, Firebase, and Google Play deployment.",
      "iOS Development: Swift & Objective-C, SwiftUI & UIKit, CoreML & ARKit, and secure App Store deployment.",
      "Custom API Integrations: Social media, payment gateways, GPS tracking, push notifications, and real-time updates.",
    ],
    image: "/assets/img/pic-01.jpg",
  },
  {
    id: "features-tab-4",
    icon: "bi bi-layers",
    title: "Cross-Platform Development",
    heading: "High-Quality Mobile Apps with React Native & Flutter",
    description: [
      "We develop cost-effective, cross-platform applications without compromising performance or user experience.",
      "React Native: Component reusability, Redux Toolkit, React Navigation, and seamless native integrations.",
      "Flutter: Dart-powered apps with stunning UI, hot reload for faster development, and high-performance animations.",
      "Unified Codebase: Single codebase for Android & iOS, reducing development time and maintenance overhead.",
    ],
    image: "/assets/img/pic-03.jpg",
  },
];

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("features-tab-1");

  return (
    <section id="features" className="features section">
      <div className="container">
        {/* Tabs Navigation */}
        <ul className="nav nav-tabs row d-flex" data-aos="fade-up" data-aos-delay="100">
          {features.map((feature, index) => (
            <li key={feature.id} className="nav-item col-3">
              <a
                className={`nav-link ${activeTab === feature.id ? "active show" : ""}`}
                onClick={() => setActiveTab(feature.id)}
              >
                <i className={`bi ${feature.icon}`}></i>
                <h4 className="d-none d-lg-block">{feature.title}</h4>
              </a>
            </li>
          ))}
        </ul>

        {/* Tabs Content */}
        <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
          {features.map((feature) => (
            <div key={feature.id} className={`tab-pane fade ${activeTab === feature.id ? "active show" : ""}`} id={feature.id}>
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                  <h3>{feature.heading}</h3>
                  <p className="fst-italic">{feature.description[0]}</p>
                  <ul>
                    {feature.description.slice(1).map((desc, index) => (
                      <li key={index}>
                        <i className="bi bi-check2-all"></i> <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <Image src={feature.image} alt={feature.title} className="img-fluid" width={500} height={400} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
