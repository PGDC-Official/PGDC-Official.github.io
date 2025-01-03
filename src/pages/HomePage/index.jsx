import { Avatar, Carousel, Divider, Tooltip } from "antd";
import carouselData from "../../data/carousel.data.json";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiFacebookCircleFill,
  RiGithubFill,
} from "react-icons/ri";
import membersData from "../../data/members.data.json";
import { Suspense, useEffect } from "react";
import Fallback from "../../components/Fallback";
import useViewport from "../../utils/hooks/useViewport";

import services from "../../data/services.data";
function HomePage() {
  const viewport = useViewport();
  const isMobile = viewport.width < 768;

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
            <h2 className="">
              About Us
              {
                // TODO: Add some icons or graphics here
              }
            </h2>
            <div className="text-justify">
              <p>
                {isMobile ? (
                  <>
                    <span>
                      The Phenikaa Game Development Club (PGDC) is a
                      student-founded
                    </span>
                    <span> community at Phenikaa University, dedicated to</span>{" "}
                    <span>
                      empowering students in game design and development.
                    </span>
                  </>
                ) : (
                  <>
                    The Phenikaa Game Development Club (PGDC) is a
                    student-founded community at Phenikaa University, dedicated
                    to empowering students in game design and development.
                  </>
                )}
              </p>
              <p>
                Born from a shared passion for creativity and technology, PGDC
                provides a space for learning, collaboration, and innovation.
                Through workshops, events, and showcases, we strive to help
                members turn their ideas into impactful games and connect with
                the broader game development community.
              </p>
            </div>
          </div>
        </section>

        <section className="section services">
          <h2>Our Activites</h2>
          <div className="section-item">
            {Array.from(services).map((item, index) => (
              <div key={index} className="service-item">
                <img src={item.icon} alt="Service" />
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm md:text-center text-start">{item.description}</p>
                </div>
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
                <Avatar size={200} src={item.image} alt="Tran Anh Tu" />
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
                  // arrows
                  infinite={true}
                  autoplaySpeed={10000}
                  autoplay
                  dots={true}
                  nextArrow={
                    <RiArrowRightSLine color="#000" size={50} fontSize={50} />
                  }
                  prevArrow={
                    <RiArrowLeftSLine color="#000" size={50} fontSize={50} />
                  }
                >
                  {
                    // group of 4 members per slide get from membersData.members
                    Array.from({
                      length: Math.ceil(membersData.members.length / 4),
                    }).map((_, index) => (
                      <div key={index}>
                        {Array.from(
                          membersData.members.slice(index * 4, index * 4 + 4)
                        ).map((item, index) => (
                          <div key={index} className="member-item">
                            <Avatar
                              key={index}
                              src={item.image}
                              className="member-avatar"
                            />
                            <h3>{item.name}</h3>
                            <p>{item.role}</p>
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
                        ))}
                      </div>
                    ))
                  }
                </Carousel>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Suspense>
  );
}

export default HomePage;
