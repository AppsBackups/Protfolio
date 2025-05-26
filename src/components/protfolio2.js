import Image from "next/image";
import Link from "next/link";

const portfolioItems = [
  { 
    id: 1,
    title: "E-Commerce Platform", 
    description: "Full-featured online shopping solution",
    image: "/assets/img/portfolio/prroject1.PNG" 
  },
  { 
    id: 2,
    title: "Mobile Banking App", 
    description: "Secure financial transactions on the go",
    image: "/assets/img/portfolio/project2.png" 
  },
  { 
    id: 3,
    title: "E-Commerce Platform", 
    description: "Full-featured online shopping solution",
    image: "/assets/img/portfolio/project10.jpg" 
  },
  { 
    id: 4,
    title: "Mobile Banking App", 
    description: "Secure financial transactions on the go",
    image: "/assets/img/portfolio/project6.jpg" 
  },
  { 
    id: 5,
    title: "E-Commerce Platform", 
    description: "Full-featured online shopping solution",
    image: "/assets/img/portfolio/project7.jpg" 
  },
  { 
    id: 6,
    title: "Mobile Banking App", 
    description: "Secure financial transactions on the go",
    image: "/assets/img/portfolio/project8.jpg" 
  },
  { 
    id: 7,
    title: "E-Commerce Platform", 
    description: "Full-featured online shopping solution",
    image: "/assets/img/portfolio/project9.jpg" 
  },
  { 
    id: 8,
    title: "Mobile Banking App", 
    description: "Secure financial transactions on the go",
    image: "/assets/img/portfolio/project4.png" 
  },
  { 
    id: 9,
    title: "E-Commerce Platform", 
    description: "Full-featured online shopping solution",
    image: "/assets/img/portfolio/project3.PNG" 
  }
  // Add more items with unique ids
];

export default function Portfolio2() {
  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Products</h2>
        <p>SOFTWARE SOLUTIONS WE'VE BUILT</p>
      </div>

      <div className="container">
        <div className="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">
          {portfolioItems.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 portfolio-item">
              <div className="portfolio-content h-100">
                <div className="portfolio-image-wrapper">
                  <Image 
                    src={item.image} 
                    className="img-fluid" 
                    alt={item.title} 
                    width={400} 
                    height={300} 
                    layout="responsive"
                  />
                </div>
                <div className="portfolio-info">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <div className="portfolio-links">
                    <a href={item.image} className="glightbox preview-link" title="View Screenshot">
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <Link href={`/portfolio/${item.id}`} passHref legacyBehavior>
                      <a className="details-link" title="More Details">
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .portfolio-image-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        .portfolio-item:hover .portfolio-image-wrapper {
          transform: translateY(-5px);
        }
        .portfolio-info {
          padding: 20px 0;
        }
        .portfolio-info h4 {
          font-size: 1.2rem;
          margin-bottom: 5px;
          color: #2c4964;
        }
        .portfolio-info p {
          color: #6c757d;
          margin-bottom: 10px;
        }
        .portfolio-links {
          display: flex;
          gap: 15px;
        }
        .portfolio-links a {
          color: #1977cc;
          font-size: 1.2rem;
          transition: color 0.3s;
        }
        .portfolio-links a:hover {
          color: #1c84e3;
        }
      `}</style>
    </section>
  );
}