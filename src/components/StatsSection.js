import { useEffect } from "react";

const statsData = [
  { icon: "bi-emoji-smile color-blue", endValue: 30, label: "Happy Clients" },
  { icon: "bi-journal-richtext color-orange", endValue: 35, label: "Projects Delivered" },
  { icon: "bi-headset color-green", endValue: 2223, label: "Hours of Support" },
  { icon: "bi-people color-pink", endValue: 6, label: "Tech Experts" },
];

export default function StatsSection() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        if (window.PureCounter) {
          new window.PureCounter();
        }
      }, 500);
    }
  }, []);

  return (
    <section id="stats" className="stats section light-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {statsData.map((stat, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className={`bi ${stat.icon} flex-shrink-0`}></i>
                <div>
                  {/* ✅ Ensure the data attributes are correctly applied */}
                  <span
                    className="purecounter"
                    data-purecounter-start="0"
                    data-purecounter-end={stat.endValue}
                    data-purecounter-duration="2"
                  >
                    {stat.endValue} {/* Fallback static number */}
                  </span>
                  <p>{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
