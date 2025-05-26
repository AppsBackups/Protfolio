import Image from "next/image";

const clients = [
  { imgSrc: "/assets/img/clients/ic_mark.png", alt: "Client 1" },
  { imgSrc: "/assets/img/clients/map_icon.png", alt: "Client 2" },
  { imgSrc: "/assets/img/clients/app_icon.png", alt: "Client 3" },
  { imgSrc: "/assets/img/clients/icon.jpg", alt: "Client 4" },
  { imgSrc: "/assets/img/clients/splash.png", alt: "Client 5" },
  { imgSrc: "/assets/img/clients/rider_icon.png", alt: "Client 6" },
];

export default function ClientsSection() {
  return (
    <section id="clients" className="clients section light-background">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          {clients.map((client, index) => (
            <div key={index} className="col-xl-2 col-md-3 col-6 client-logo">
              <Image
                src={client.imgSrc}
                className="img-fluid"
                alt={client.alt}
                width={150}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
