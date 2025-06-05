import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi';
import { FaGooglePlay } from 'react-icons/fa';

// Updated portfolio items with multiple images and Android-specific details
const portfolioItems = [
  { 
    id: 2,
    title: "CARD MAKER", 
    description: "Android app for creating custom cards",
    images: [
      "/assets/img/portfolio/android/2/1.png",
      "/assets/img/portfolio/android/2/2.jpg",
      "/assets/img/portfolio/android/2/3.jpg",
      "/assets/img/portfolio/android/2/4.jpg",
      "/assets/img/portfolio/android/2/5.jpg",
      "/assets/img/portfolio/android/2/6.jpg"
    ],
    detailDescription: "A feature-rich fitness application that helps users track their workouts, nutrition, and progress. Includes personalized workout plans, exercise demonstrations, and progress analytics.",
    technologies: ["Kotlin", "Android SDK", "Firebase", "Room Database"],
    client: "HealthFit Inc.",
    projectDate: "March 2023",
    projectUrl: "https://play.google.com/store/apps/details?id=com.example.fitnesstracker",
    features: [
      "Custom workout plans",
      "Exercise video demonstrations",
      "Progress tracking with charts",
      "Social sharing features",
      "Offline functionality"
    ]
  },
  { 
    id: 1,
    title: "Task Management App", 
    description: "Productivity app for task organization",
    images: [
      "/assets/img/portfolio/android/project2-1.jpg",
      "/assets/img/portfolio/android/project2-2.jpg",
      "/assets/img/portfolio/android/project2-3.jpg"
    ],
    detailDescription: "An intuitive task management application with team collaboration features. Allows users to create projects, assign tasks, set deadlines, and track progress.",
    technologies: ["Java", "Android SDK", "Firebase", "Material Design"],
    client: "Productivity Solutions",
    projectDate: "January 2023",
    projectUrl: "https://play.google.com/store/apps/details?id=com.example.taskmanager",
    githubUrl: "https://github.com/yourusername/task-manager",
    features: [
      "Task categorization with tags",
      "Team collaboration",
      "Calendar integration",
      "Reminder notifications",
      "Dark mode support"
    ]
  },
  { 
    id: 3,
    title: "Task Management App", 
    description: "Productivity app for task organization",
    images: [
      "/assets/img/portfolio/android/project2-1.jpg",
      "/assets/img/portfolio/android/project2-2.jpg",
      "/assets/img/portfolio/android/project2-3.jpg"
    ],
    detailDescription: "An intuitive task management application with team collaboration features. Allows users to create projects, assign tasks, set deadlines, and track progress.",
    technologies: ["Java", "Android SDK", "Firebase", "Material Design"],
    client: "Productivity Solutions",
    projectDate: "January 2023",
    projectUrl: "https://play.google.com/store/apps/details?id=com.example.taskmanager",
    githubUrl: "https://github.com/yourusername/task-manager",
    features: [
      "Task categorization with tags",
      "Team collaboration",
      "Calendar integration",
      "Reminder notifications",
      "Dark mode support"
    ]
  },
  { 
    id: 4,
    title: "ADAM App", 
    description: "Dating App for Android",
    images: [
      "/assets/img/portfolio/ANDROID/4/1.jpg",
      "/assets/img/portfolio/ANDROID/4/2.jpg",
      "/assets/img/portfolio/ANDROID/4/3.png","/assets/img/portfolio/ANDROID/4/4.jpg",
      "/assets/img/portfolio/ANDROID/4/5.jpg"
    ],
    detailDescription: "Discover meaningful connections with DatingApp – the modern dating app designed to help you find your soulmate. Explore profiles, connect with like-minded individuals, and unlock premium features with flexible plans to enhance your experience. Stand out from the crowd with our Limelight Plan, boosting your profile to the top of searches for maximum visibility. Chat with premium users, build genuine relationships, and take control of your dating journey. Whether you're looking for love, friendship, or something in between, DatingApp is your gateway to finding your perfect match. Download now and start connecting today!",
    technologies: ["Java", "MySql", "Firebase", "Kotlin"],
    client: "Productivity Solutions",
    projectDate: "January 2023",
    projectUrl: "https://play.google.com/store/apps/details?id=com.example.taskmanager",
    features: [
      "Task categorization with tags",
      "Team collaboration",
      "Calendar integration",
      "Reminder notifications",
      "Dark mode support"
    ]
  },
  { 
    id: 5,
    title: "ADAM App", 
    description: "Dating App for Android",
    images: [
      "/assets/img/portfolio/ANDROID/4/1.jpg",
      "/assets/img/portfolio/ANDROID/4/2.jpg",
      "/assets/img/portfolio/ANDROID/4/3.png","/assets/img/portfolio/ANDROID/4/4.jpg",
      "/assets/img/portfolio/ANDROID/4/5.jpg"
    ],
    detailDescription: "Discover meaningful connections with DatingApp – the modern dating app designed to help you find your soulmate. Explore profiles, connect with like-minded individuals, and unlock premium features with flexible plans to enhance your experience. Stand out from the crowd with our Limelight Plan, boosting your profile to the top of searches for maximum visibility. Chat with premium users, build genuine relationships, and take control of your dating journey. Whether you're looking for love, friendship, or something in between, DatingApp is your gateway to finding your perfect match. Download now and start connecting today!",
    technologies: ["Java", "MySql", "Firebase", "Kotlin"],
    client: "Productivity Solutions",
    projectDate: "January 2023",
    projectUrl: "https://play.google.com/store/apps/details?id=com.example.taskmanager",
    features: [
      "Task categorization with tags",
      "Team collaboration",
      "Calendar integration",
      "Reminder notifications",
      "Dark mode support"
    ]
  },
  { 
    id: 9,
    title: "CareWay Mobility", 
    description: "App for transportation services",
    images: [
      "/assets/img/portfolio/ANDROID/9/1.jpg",
      "/assets/img/portfolio/ANDROID/9/2.jpg",
      "/assets/img/portfolio/ANDROID/9/3.png","/assets/img/portfolio/ANDROID/9/4.jpg",
      "/assets/img/portfolio/ANDROID/9/5.jpg"
    ],
    detailDescription: "The transportation solution for many industries such as healthcare , transportation services , hotels, Education (Schools, Colleges, Universities) & others, CareWay will ensure your customer satisfaction and allows you to enjoy your time while we manage your this portion of your business. There are 3 modules of the app Admin, User and Driver. User can send request for any Ride. Admin will send the request to all the available driver and then one of them will accept that request and then ride will be started on time selected by the user and on specific day. ",
    technologies: ["Java", "Swift", "Google MAPS", "Kotlin"],
    client: "Productivity Solutions",
    projectDate: "January 2023",
    
    features: [
      "Task categorization with tags",
      "Team collaboration",
      "Calendar integration",
      "Reminder notifications",
      "Dark mode support"
    ]
  },
  { 
    id: 8,
    title: "CareWay Mobility", 
    description: "App for transportation services",
    images: [
      "/assets/img/portfolio/ANDROID/9/1.jpg",
      "/assets/img/portfolio/ANDROID/9/2.jpg",
      "/assets/img/portfolio/ANDROID/9/3.png","/assets/img/portfolio/ANDROID/9/4.jpg",
      "/assets/img/portfolio/ANDROID/9/5.jpg"
    ],
    detailDescription: "The transportation solution for many industries such as healthcare , transportation services , hotels, Education (Schools, Colleges, Universities) & others, CareWay will ensure your customer satisfaction and allows you to enjoy your time while we manage your this portion of your business. There are 3 modules of the app Admin, User and Driver. User can send request for any Ride. Admin will send the request to all the available driver and then one of them will accept that request and then ride will be started on time selected by the user and on specific day. ",
    technologies: ["Java", "Swift", "Google MAPS", "Kotlin"],
    client: "Productivity Solutions",
    projectDate: "January 2023",
    
    features: [
      "Task categorization with tags",
      "Team collaboration",
      "Calendar integration",
      "Reminder notifications",
      "Dark mode support"
    ]
  }
  // Add more items following the same structure
];

export default function PortfolioDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (router.isFallback) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
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

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === item.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? item.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
     <link rel="stylesheet" href="/assets/css/main.css" />
      <Head>
        <title>{item.title} | LogixLoop</title>
        <meta name="description" content={item.detailDescription} />
      </Head>

      <header
        id="header"
        className="header d-flex align-items-center fixed-top bg-black bg-opacity-100 text-white"
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

      <main style={{ paddingTop: '80px' }}>
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="position-relative">
                {/* Image Slider */}
                <div className="position-relative overflow-hidden rounded-3" style={{ height: '500px' }}>
                  <Image 
                    src={item.images[currentImageIndex]} 
                    alt={`${item.title} screenshot ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                
                {/* Navigation Arrows */}
                {item.images.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="position-absolute top-50 start-0 translate-middle-y btn btn-dark rounded-circle p-2 ms-3"
                      style={{ zIndex: 10 }}
                    >
                      <FiArrowLeft size={24} />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="position-absolute top-50 end-0 translate-middle-y btn btn-dark rounded-circle p-2 me-3"
                      style={{ zIndex: 10 }}
                    >
                      <FiArrowRight size={24} />
                    </button>
                  </>
                )}
                
                {/* Image Indicators */}
                {item.images.length > 1 && (
                  <div className="d-flex justify-content-center mt-3">
                    {item.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`btn p-0 mx-1 ${index === currentImageIndex ? 'opacity-100' : 'opacity-50'}`}
                      >
                        <div style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          backgroundColor: index === currentImageIndex ? '#0d6efd' : '#6c757d'
                        }} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Project Features Section */}
              <div className="mt-5">
                <h3 className="mb-4">Key Features</h3>
                <div className="row g-3">
                  {item.features.map((feature, index) => (
                    <div key={index} className="col-md-6">
                      <div className="p-3 bg-light rounded-2 h-100">
                        <div className="d-flex align-items-center">
                          <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-2 me-3">
                            <span className="fw-bold">{index + 1}</span>
                          </div>
                          <span>{feature}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="sticky-top" style={{ top: '100px' }}>
                <h1 className="mb-3 fw-bold">{item.title}</h1>
                <p className="lead text-muted">{item.description}</p>
                <p className="mb-4">{item.detailDescription}</p>
                
                {/* Project Links */}
                <div className="d-flex gap-2 mb-4">
                  {item.projectUrl && (
                    <a 
                      href={item.projectUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-success d-flex align-items-center gap-2"
                    >
                      <FaGooglePlay size={18} />
                      Play Store
                    </a>
                  )}
                  {item.githubUrl && (
                    <a 
                      href={item.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-dark d-flex align-items-center gap-2"
                    >
                      <FiGithub size={18} />
                      View Code
                    </a>
                  )}
                </div>
                
                {/* Project Information */}
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body">
                    <h5 className="card-title mb-3">Project Information</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <strong className="d-block text-muted small">Client</strong>
                        <span>{item.client}</span>
                      </li>
                      <li className="mb-2">
                        <strong className="d-block text-muted small">Technologies</strong>
                        <div className="d-flex flex-wrap gap-2 mt-1">
                          {item.technologies.map((tech, index) => (
                            <span key={index} className="badge bg-primary bg-opacity-10 text-primary">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </li>
                      <li className="mb-2">
                        <strong className="d-block text-muted small">Project Date</strong>
                        <span>{item.projectDate}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Link href="/#portfolio" className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-center gap-2">
                  <FiArrowLeft size={18} />
                  Back to Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx global>{`
        body {
          font-family: 'Inter', sans-serif;
          background-color: #f8f9fa;
          color: #212529;
          line-height: 1.6;
          scroll-behavior: smooth;
          overflow-x: hidden;
          position: relative;
          min-height: 100vh;
           padding-top: 80px;
        padding-bottom: 60px;
        background: linear-gradient(to bottom, #ffffff, #f8f9fa);
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url('/assets/img/testimonials-bg.jpg');
        background-blend-mode: overlay;
        background-color: rgba(255, 255, 255, 0.95);
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url('/assets/img/bg-pattern.png');
        background-blend-mode: overlay;
        background-color: rgba(255, 255, 255, 0.95);
        }
        
        .header {
          transition: all 0.3s ease;
        }
        
        .logo h1 {
          font-weight: 700;
          font-size: 1.5rem;
          letter-spacing: 1px;
        }
        
        .navmenu ul {
          display: flex;
          gap: 1rem;
          margin: 0;
          padding: 0;
        }
        
        .navmenu a {
          color:rgb(12, 0, 0);
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
        }
        
        .navmenu a:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        
        .btn {
          transition: all 0.3s ease;
          font-weight: 500;
          padding: 0.5rem 1.25rem;
          border-radius: 0.5rem;
        }
        
        .btn-primary {
          background-color: #0d6efd;
          border-color: #0d6efd;
        }
        
        .btn-primary:hover {
          background-color: #0b5ed7;
          border-color: #0a58ca;
        }
        
        .card {
          border-radius: 0.75rem;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        .badge {
          padding: 0.35em 0.65em;
          font-weight: 500;
          border-radius: 0.5rem;
        }
      `}</style>
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