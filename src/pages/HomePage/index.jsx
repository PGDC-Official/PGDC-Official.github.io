import { Carousel } from "antd";
import carouselData from "../../data/carousel.data.json"

function HomePage() {
  return (
    <div className="home-page">
      <Carousel arrows infinite={true} autoplay={false} autoplaySpeed={3000} className="carousel">
          {
            Array.from(carouselData).map((item, index) => (
              <img key={index} src={item.src} alt={item.alt} className="carousel-item" />
            ))
          }
      </Carousel>

      
    </div>
  );
}

export default HomePage;
