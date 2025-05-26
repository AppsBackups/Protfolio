import Image from "next/image";

const testimonials = [
  {
    name: "MR ANSAR BILAL",
    position: "CEO & Founder",
    image: "/assets/img/team/pic2.jpg",
    quote:
      "Looping Innovation into Your World!",
  },
  {
    name: "Sara Wilsson",
    position: "Designer",
    image: "/assets/img/testimonials/testimonials-2.jpg",
    quote:
      "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
  },
  {
    name: "Jena Karlis",
    position: "Store Owner",
    image: "/assets/img/testimonials/testimonials-3.jpg",
    quote:
      "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
  },
  {
    name: "Matt Brandon",
    position: "Freelancer",
    image: "/assets/img/testimonials/testimonials-4.jpg",
    quote:
      "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
  },
  {
    name: "John Larson",
    position: "Entrepreneur",
    image: "/assets/img/testimonials/testimonials-5.jpg",
    quote:
      "Transforming visions into scalable software with cutting-edge tech and relentless innovation.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="testimonials section dark-background">
      <Image
        src="/assets/img/testimonials-bg.jpg"
        className="testimonials-bg"
        alt="Testimonials Background"
        width={1920}
        height={800}
      />
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="swiper init-swiper">
          <div className="swiper-wrapper">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="swiper-slide">
                <div className="testimonial-item">
                  <Image
                    src={testimonial.image}
                    className="testimonial-img"
                    alt={testimonial.name}
                    width={100}
                    height={100}
                  />
                  <h3>{testimonial.name}</h3>
                  <h4>{testimonial.position}</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>{testimonial.quote}</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}
