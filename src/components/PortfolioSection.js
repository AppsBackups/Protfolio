import Image from "next/image";

const portfolioItems = [
  { category: "filter-app", title: "App 1", image: "/assets/img/portfolio/prroject1.PNG" },
  { category: "filter-product", title: "Product 1", image: "/assets/img/portfolio/project2.png" },
  { category: "filter-branding", title: "Branding 1", image: "/assets/img/portfolio/project4.png" },
  { category: "filter-books", title: "Books 1", image: "/assets/img/portfolio/project6.jpg" },
  { category: "filter-app", title: "App 2", image: "/assets/img/portfolio/project3.png" },
  { category: "filter-product", title: "Product 2", image: "/assets/img/portfolio/project7.jpg" },
  { category: "filter-branding", title: "Branding 2", image: "/assets/img/portfolio/project8.jpg" },
  { category: "filter-books", title: "Books 2", image: "/assets/img/portfolio/project9.jpg" },
  { category: "filter-app", title: "App 3", image: "/assets/img/portfolio/project10.jpg" },
  
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>CHECK OUR PORTFOLIO</p>
      </div>

      <div className="container">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          

          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            {portfolioItems.map((item, index) => (
              <div key={index} className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.category}`}>
                <div className="portfolio-content h-100">
                  <Image src={item.image} className="img-fluid" alt={item.title} width={400} height={300} />
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a href={item.image} className="glightbox preview-link">
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a href="portfolio-details.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
