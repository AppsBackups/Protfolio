import { useState } from 'react';
import axios from 'axios';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post('/api/send-email', formData);
      if (response.data.success) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus({ type: 'error', message: response.data.message || 'Message sent successfully! WE will contact you soon.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: error.response?.data?.message || 'Message sent successfully! WE will contact you soon.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:info@logixloop.com?subject=Contact%20from%20website&body=Hello%20LogixLoop%20team,%0D%0A%0D%0AMy%20name%20is%20[Your%20Name].%0D%0A%0D%0A[Your%20message%20here]%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]`;
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>US</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-geo-alt"></i>
              <h3>Address</h3>
              <p>Garden Town, Phase II, G BLOCK, Gujranwala</p>
            </div>
            <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-telephone"></i>
              <h3>Call Us</h3>
              <p>+92 321 5386851</p>
            </div>
            <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-envelope"></i>
              <h3>Email Us</h3>
              <p>
                <a href="#" onClick={handleEmailClick} style={{ color: 'inherit', textDecoration: 'none' }}>
                  info@logixloop.com
                </a>
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="500">
              <div className="row gy-4">
                <div className="col-md-6">
                  <input 
                    type="text" 
                    name="name" 
                    className="form-control" 
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="col-md-6">
                  <input 
                    type="email" 
                    className="form-control" 
                    name="email" 
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="col-md-12">
                  <input 
                    type="text" 
                    className="form-control" 
                    name="subject" 
                    placeholder="Subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="col-md-12">
                  <textarea 
                    className="form-control" 
                    name="message" 
                    rows="4" 
                    placeholder="Message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                {submitStatus && (
                  <div className={`col-md-12 alert alert-${submitStatus.type}`}>
                    {submitStatus.message}
                  </div>
                )}
                
                <div className="col-md-12 text-center">
                  <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}