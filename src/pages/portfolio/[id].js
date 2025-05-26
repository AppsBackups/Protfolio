import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const portfolioItems = [
  { 
    id: 1,
    title: "E-Commerce Platform", 
    description: "Full-featured online shopping solution",
    image: "/assets/img/portfolio/prroject1.PNG",
    detailDescription: "A comprehensive e-commerce platform with payment gateway integration, inventory management, and customer analytics.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    client: "Fashion Retail Inc.",
    projectDate: "January 2023",
    projectUrl: "https://example-ecommerce.com"
  },
  { 
    id: 2,
    title: "E-Commerce Platform", 
    description: "Full-featured online shopping solution",
    image: "/assets/img/portfolio/project2.png",
    detailDescription: "A comprehensive e-commerce platform with payment gateway integration, inventory management, and customer analytics.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    client: "Fashion Retail Inc.",
    projectDate: "January 2023",
    projectUrl: "https://example-ecommerce.com"
  },
  { 
    id: 3,
    title: "E-Commerce Platform", 
    description: "Full-featured online shopping solution",
    image: "/assets/img/portfolio/project10.jpg",
    detailDescription: "A comprehensive e-commerce platform with payment gateway integration, inventory management, and customer analytics.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    client: "Fashion Retail Inc.",
    projectDate: "January 2023",
    projectUrl: "https://example-ecommerce.com"
  },
  { 
    id: 4,
    title: "E-Commerce Platform", 
    description: "Full-featured online shopping solution",
    image: "/assets/img/portfolio/project6.jpg",
    detailDescription: "A comprehensive e-commerce platform with payment gateway integration, inventory management, and customer analytics.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    client: "Fashion Retail Inc.",
    projectDate: "January 2023",
    projectUrl: "https://example-ecommerce.com"
  },
  { 
    id: 5,
    title: "E-Commerce Platform", 
    description: "Full-featured online shopping solution",
    image: "/assets/img/portfolio/project7.jpg",
    detailDescription: "A comprehensive e-commerce platform with payment gateway integration, inventory management, and customer analytics.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    client: "Fashion Retail Inc.",
    projectDate: "January 2023",
    projectUrl: "https://example-ecommerce.com"
  },
  { 
    id: 6,
    title: "E-Commerce Platform", 
    description: "Full-featured online shopping solution",
    image: "/assets/img/portfolio/project8.jpg",
    detailDescription: "A comprehensive e-commerce platform with payment gateway integration, inventory management, and customer analytics.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    client: "Fashion Retail Inc.",
    projectDate: "January 2023",
    projectUrl: "https://example-ecommerce.com"
  },
  { 
    id: 7,
    title: "E-Commerce Platform", 
    description: "Full-featured online shopping solution",
    image: "/assets/img/portfolio/project9.jpg",
    detailDescription: "A comprehensive e-commerce platform with payment gateway integration, inventory management, and customer analytics.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    client: "Fashion Retail Inc.",
    projectDate: "January 2023",
    projectUrl: "https://example-ecommerce.com"
  },
  { 
    id: 8,
    title: "E-Commerce Platform", 
    description: "Full-featured online shopping solution",
    image: "/assets/img/portfolio/project4.png",
    detailDescription: "A comprehensive e-commerce platform with payment gateway integration, inventory management, and customer analytics.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    client: "Fashion Retail Inc.",
    projectDate: "January 2023",
    projectUrl: "https://example-ecommerce.com"
  },
  { 
    id: 9,
    title: "E-Commerce Platform", 
    description: "Full-featured online shopping solution",
    image: "/assets/img/portfolio/project3.PNG",
    detailDescription: "A comprehensive e-commerce platform with payment gateway integration, inventory management, and customer analytics.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    client: "Fashion Retail Inc.",
    projectDate: "January 2023",
    projectUrl: "https://example-ecommerce.com"
  },
  // Add more items with unique ids
];

export default function PortfolioDetail() {
  const router = useRouter();
  const { id } = router.query;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const item = portfolioItems.find(item => item.id === Number(id));

  if (!item) {
    return (
      <div className="container py-5 text-center">
        <h2>Project not found</h2>
        <Link href="/" className="btn btn-primary mt-3">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{item.title} | LogixLoop</title>
        <meta name="description" content={item.detailDescription} />
      </Head>

      <header id="header" className="header d-flex align-items-center fixed-top" style={{ background: 'black', boxShadow: '0 2px 15px rgba(0, 0, 0, 0.1)' }}>
        <div className="container-fluid container-xl position-relative d-flex align-items-center">
          <Link href="/" className="logo d-flex align-items-center me-auto">
            <h1 className="sitename">LogixLoop</h1>
          </Link>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li><Link href="/#hero" className="active">Home</Link></li>
              <li><Link href="/#about">About</Link></li>
              <li><Link href="/#services">Services</Link></li>
              <li><Link href="/#portfolio">Portfolio</Link></li>
              <li><Link href="/#team">Team</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <Link href="/#about" className="cta-btn">
            Get Started
          </Link>
        </div>
      </header>

      <main style={{ paddingTop: '80px' }}> {/* Add padding to account for fixed header */}
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <Image 
                src={item.image} 
                alt={item.title}
                width={800}
                height={600}
                className="img-fluid rounded"
                unoptimized
              />
            </div>
            <div className="col-lg-4">
              <h1 className="mb-4">{item.title}</h1>
              <p className="lead">{item.detailDescription}</p>
              <div className="project-info mt-4">
                <h4>Project Information</h4>
                <ul className="list-unstyled">
                  <li><strong>Client:</strong> {item.client}</li>
                  <li><strong>Technologies:</strong> {item.technologies.join(', ')}</li>
                  <li><strong>Project Date:</strong> {item.projectDate}</li>
                  <li><strong>Project URL:</strong> 
                    <a href={item.projectUrl} target="_blank" rel="noopener noreferrer" className="text-decoration-underline">
                      {item.projectUrl}
                    </a>
                  </li>
                </ul>
              </div>
              <Link href="/#portfolio" className="btn btn-primary mt-3">
                ← Back to Portfolio
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const paths = portfolioItems.map(item => ({
    params: { id: item.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps() {
  return { props: {} };
}