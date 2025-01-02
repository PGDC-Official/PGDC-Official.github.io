import { Avatar, Carousel, Divider, Tooltip } from "antd";
import carouselData from "../../data/carousel.data.json";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiFacebookCircleFill,
  RiGithubFill,
} from "react-icons/ri";
import membersData from "../../data/members.data.json";
import { Suspense } from "react";
import Fallback from "../../components/Fallback";
import image from "../../assets/trananhtu.jpg";
function HomePage() {
  return (
    <Suspense fallback={<Fallback />}>
      <div className="home-page">
        <Carousel
          arrows
          infinite={true}
          // autoplay={true}
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

        {/* <section className="section" style={{
          height: "720px",
          width: "1280px"
        }}>
          <iframe
          style={{
            width: "100%",
          }}
            allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated; web-share"
            src="https://tailuge.github.io/billiards/dist/"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen={true}
            id="game_drop"
          ></iframe>
        </section> */}

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
              euismod, nisl eget scelerisque tincidunt, lacus felis aliquet
              odio, vel tincidunt nunc libero nec nunc. Phasellus nec purus ac
              nunc ultricies aliquam. Nullam nec nunc nec nunc ultricies
              aliquam. Nullam nec nunc nec nunc ultricies aliquam. Nullam nec
              nunc nec nunc ultricies aliquam.
            </p>
          </div>
        </section>

        <section className="section services">
          <h2>Our Activites</h2>
          <div className="section-item">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="service-item">
                <img src="https://placehold.co/200x200" alt="Service" />
                <h3>Service Name</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  euismod, nisl eget scelerisque tincidunt, lacus felis aliquet
                  odio, vel tincidunt nunc libero nec nunc. Phasellus nec purus
                  ac nunc ultricies aliquam. Nullam nec nunc nec nunc ultricies
                  aliquam. Nullam nec nunc nec nunc ultricies aliquam. Nullam
                  nec nunc nec nunc ultricies aliquam.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="section founders">
          <h2>
            {membersData.founders.length === 1 ? "Our Leader" : "Our Leaders"}
          </h2>
          <div
            className={`section-item founders-list ${
              membersData.founders.length === 1 ? "founders-list-center" : ""
            }`}
          >
            {Array.from(membersData.founders).map((item, index) => (
              <div key={index} className={`founder-item`}>
                <Avatar size={200} src={item.image} />
                {/* <img src={item.image} alt={item.name} /> */}
                <h3>{item.name}</h3>
                <p>{item.role}</p>
                <div className="founder-social">
                  {Array.from(item.links).map((link, index) => {
                    switch (link.icon) {
                      case "facebook":
                        return (
                          <Tooltip
                            key={index}
                            title={link.name}
                            placement="bottom"
                          >
                            <a href={link.url} target="_blank" rel="noreferrer">
                              <RiFacebookCircleFill size={25} />
                            </a>
                          </Tooltip>
                        );
                      case "github":
                        return (
                          <Tooltip
                            key={index}
                            title={link.name}
                            placement="bottom"
                          >
                            <a href={link.url} target="_blank" rel="noreferrer">
                              <RiGithubFill size={25} />
                            </a>
                          </Tooltip>
                        );
                      default:
                        return null;
                    }
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {
          // TODO: Maybe add members section here
        }

        <section className="section community">
          <h2>Community</h2>
          <div className="section-item">
            <div className="community-item">
              <p className="community-item-count">200+</p>{" "}
              {/* Memebers count */}
              <div className="community-item-content">
                <h3>Members</h3>
                <img src="https://placehold.co/100x100" alt="Members" />{" "}
                {/* TODO: Icon here */}
              </div>
            </div>

            <div className="community-item">
              <p className="community-item-count">200+</p>{" "}
              {/* Memebers count */}
              <div className="community-item-content">
                <h3>Members</h3>
                <img src="https://placehold.co/100x100" alt="Members" />{" "}
                {/* TODO: Icon here */}
              </div>
            </div>

            <div
              style={{
                padding: "1rem",
                display: "block",
                width: "100%",
              }}
            >
              <div className="members-list">
                {/* <div className="horizontal-auto-scroll">
                {Array.from({length: 30}).map((item, index) => (
                  <Avatar
                    key={index}
                    src="https://placehold.co/100x100"
                    style={{
                      marginRight: "1rem",
                    }}
                    className="member-avatar"
                  />
                ))}
              </div> */}

                <Carousel
                  arrows
                  infinite={true}
                  autoplaySpeed={10000}
                  dots={false}
                  nextArrow={
                    <RiArrowRightSLine color="#000" size={50} fontSize={50} />
                  }
                  prevArrow={
                    <RiArrowLeftSLine color="#000" size={50} fontSize={50} />
                  }
                >
                  {Array.from({ length: 20 }).map((item, index) => (
                    <div key={index}>
                      {
                        // group of 5 members here

                        Array.from({ length: 5 }).map((item, index) => (
                          <div key={index} className="member-item">
                            <Avatar
                              key={index}
                              src="https://placehold.co/100x100"
                              style={{}}
                              className="member-avatar"
                            />
                            <h3>John Doe</h3>
                            <p>Member</p>
                            <div className="member-social">
                              <Tooltip
                                key={index}
                                title="Facebook"
                                placement="bottom"
                              >
                                <a href="#" target="_blank" rel="noreferrer">
                                  <RiFacebookCircleFill size={25} />
                                </a>
                              </Tooltip>

                              <Tooltip
                                key={index}
                                title="Github"
                                placement="bottom"
                              >
                                <a href="#" target="_blank" rel="noreferrer">
                                  <RiGithubFill size={25} />
                                </a>
                              </Tooltip>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  ))}
                </Carousel>
              </div>

              {/* <div className="partners-list">
                <div className="horizontal-auto-scroll reversed">
                  {Array.from({ length: 4 }).map((item, index) => (
                    <Avatar
                      key={index}
                      src="https://placehold.co/100x100"
                      style={{
                        marginRight: "1rem",
                      }}
                      className="member-avatar large"
                    />
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </Suspense>
  );
}

export default HomePage;
