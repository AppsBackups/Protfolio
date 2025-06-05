import Image from "next/image";

const teamMembers = [
  { name: "Mr. ANSAR BILAL", role: "Cheif Excecutive officer", image: "/assets/img/team/pic2.jpg" },
  { name: "Mr. ZAIN UL HAQ", role: "Senior Mobile Application Developer", image: "/assets/img/team/836.jpg" },
  { name: "Mr. ABUBAKAR", role: "Mobile Application Developer", image: "/assets/img/team/abubakar.jpg" },
  { name: "Mr. MUZAMMIL MUKHTAR", role: "Backend Developer", image: "/assets/img/team/muzammil.jpg" },
  { name: "Mr. EHTISHAM SHAHBAZ", role: "Jr Mobile Application Developer", image: "/assets/img/team/ehtisham.jpg" },
  { name: "Mr. AHMAD RAZA", role: "Graphics and web Designer", image: "/assets/img/team/ahmed.jpg" }
];

export default function TeamSection() {
  return (
    <section id="team" className="team section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Team</h2>
        <p>CHECK OUR TEAM</p>
      </div>

      <div className="container">
        <div className="row gy-5">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={`${(index + 1) * 100}`}>
              <div className="member">
                <div className="pic">
                  <Image src={member.image} className="img-fluid" alt={member.name} width={300} height={300} />
                </div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <span>{member.role}</span>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
