import { Carousel } from "antd";
import carouselData from "../../data/carousel.data.json";

function HomePage() {
  return (
    <div className="home-page">
      <Carousel
        arrows
        infinite={true}
        autoplay={false}
        autoplaySpeed={3000}
        className="carousel"
      >
        {Array.from(carouselData).map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
            className="carousel-item"
          />
        ))}
      </Carousel>

      <section className="section about-us">
        <div className="section-item image-wrapper">
          <img src="https://placehold.co/700x400" alt="About Us" />
        </div>

        <div className="section-item content-wrapper">
          <h2>
            About Us
            {
              // TODO: Add some icons or graphics here
            }
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl eget scelerisque tincidunt, lacus felis aliquet odio,
            vel tincidunt nunc libero nec nunc. Phasellus nec purus ac nunc
            ultricies aliquam. Nullam nec nunc nec nunc ultricies aliquam.
            Nullam nec nunc nec nunc ultricies aliquam. Nullam nec nunc nec nunc
            ultricies aliquam.
          </p>
        </div>
      </section>

      <section className="section services">
        <h2>Our Services</h2>
        <div className="section-item">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="service-item">
              <img src="https://placehold.co/200x200" alt="Service" />
              <h3>Service Name</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, nisl eget scelerisque tincidunt, lacus felis aliquet
                odio, vel tincidunt nunc libero nec nunc. Phasellus nec purus ac
                nunc ultricies aliquam. Nullam nec nunc nec nunc ultricies
                aliquam. Nullam nec nunc nec nunc ultricies aliquam. Nullam nec
                nunc nec nunc ultricies aliquam.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section founders">
        <h2>
          Our Founders
        </h2>
        <div className="section-item">
          
        </div>
      </section>
    </div>
  );
}

export default HomePage;
