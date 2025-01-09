import { Avatar, Carousel, Divider, Tooltip } from "antd";
// import carouselData from "../../data/carousel.data.json";
import {
  RiArrowLeftSLine,
  RiArrowRightLine,
  RiArrowRightSLine,
  RiFacebookCircleFill,
  RiGithubFill,
} from "react-icons/ri";
import membersData from "../../data/members.data.json";
import partnersData from "../../data/partners.data.json";
import { Suspense, useEffect } from "react";
import Fallback from "../../components/Fallback";
import useViewport from "../../utils/hooks/useViewport";
import carousel_1 from "../../assets/00.jpg";
import carousel_2 from "../../assets/01.jpg";
import carousel_3 from "../../assets/02.jpg";
import carousel_4 from "../../assets/03.jpg";
import carousel_5 from "../../assets/04.jpg";
import seminarIcon from "../../assets/seminar.png";
import logo from "../../assets/svg/logo_plain_sm.svg";
import services from "../../data/services.data";
import Button from "../../components/Button";
import { PATHS } from "../../routes";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const viewport = useViewport();
  const isMobile = viewport.width < 768;

  const carouselData = [
    {
      src: carousel_1,
      alt: "Club's activities",
    },
    {
      src: carousel_2,
      alt: "Club's activities",
    },
    {
      src: carousel_3,
      alt: "Club's activities",
    },
    {
      src: carousel_4,
      alt: "Club's activities",
    },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    // if .member-avatar's child img tag contains .member-avatar-default then add overflow visible to .member-avatar
    const memberAvatars = document.querySelectorAll(".member-avatar");
    const foundersAvatars = document.querySelectorAll(".founder-avatar");
    memberAvatars.forEach((avatar) => {
      if (avatar.querySelector(".member-avatar-default")) {
        avatar.style.overflow = "visible";
      }
    });
    foundersAvatars.forEach((avatar) => {
      if (avatar.querySelector(".member-avatar-default")) {
        avatar.style.overflow = "visible";
      }
    });
  }, []);

  return (
    <Suspense fallback={<Fallback />}>
      <div className="home-page">
        <Carousel
          arrows
          infinite={true}
          autoplay
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
            <img src={carousel_5} alt="About Us" className="rounded-lg" />
          </div>

          <div className="section-item content-wrapper">
            <h2 className="text-dark-blue font-bold">
              About Us
              {
                // TODO: Add some icons or graphics here
              }
            </h2>
            <div className="text-justify inter">
              <p>
                The{" "}
                <span className="text-orange">
                  Phenikaa Game Development Club (PGDC)
                </span>{" "}
                is a student-founded community at Phenikaa University, dedicated
                to empowering students in game design and development.
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
          <h2 className="text-dark-blue font-bold">Our Activites</h2>
          <div className="section-item">
            {Array.from(services).map((item, index) => (
              <div key={index} className="service-item">
                <img src={item.icon} alt="Service" />
                <div>
                  <h3 className="font-bold text-lg uppercase">
                    <span className="text-dark-blue">{item.title.blue}</span>{" "}
                    <span className="text-orange">{item.title.orange}</span>
                  </h3>
                  <p className="text-sm md:text-center text-start inter font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section founders">
          <h2 className="text-dark-blue font-bold">
            {membersData.founders.length === 1 ? "Our Leader" : "Our Leaders"}
          </h2>
          <div
            className={`section-item founders-list ${
              membersData.founders.length === 1 ? "founders-list-center" : ""
            }`}
          >
            {Array.from(membersData.founders).map((item, index) => (
              <div key={index} className={`founder-item`}>
                <Avatar
                  size={200}
                  src={item.image}
                  alt="Tran Anh Tu"
                  style={{
                    backgroundColor: "transparent",
                    color: "#000",
                  }}
                  className="founder-avatar"
                  icon={
                    <img
                      src={logo}
                      alt="PGDC's member"
                      className="member-avatar-default"
                      style={{ objectFit: "unset" }}
                    />
                  }
                />
                <h3 className="font-bold text-dark-blue text-xl">
                  {item.name}
                </h3>
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
                              <RiFacebookCircleFill size={25} color="#0866ff" />
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
                              <RiGithubFill size={25} color="#1f2328" />
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
          <h2 className="font-bold text-dark-blue">Community</h2>
          <div className="section-item">
            <div className="community-item">
              <p className="community-item-count text-orange font-bold">30+</p>{" "}
              <div className="community-item-content">
                <h3 className="text-dark-blue font-bold">Members</h3>
                <img src={seminarIcon} alt="Members" />{" "}
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
                <p className="text-dark-blue font-bold text-2xl my-4 mt-0">
                  Game Developers
                </p>
                <Carousel
                  arrows
                  infinite={true}
                  autoplaySpeed={10000}
                  autoplay
                  dots={false}
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
                      length: Math.ceil(
                        membersData.members.developers.length / 4
                      ),
                    }).map((_, index) => (
                      <div key={index} className="">
                        {Array.from(
                          membersData.members.developers.slice(
                            index * 4,
                            index * 4 + 4
                          )
                        ).map((item, index) => (
                          <div
                            key={index}
                            className="member-item grid grid-cols-1"
                          >
                            <Tooltip
                              key={index}
                              title="Open profile"
                              placement="bottom"
                            >
                              <a
                                href={item.links[0].url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <Avatar
                                  key={index}
                                  src={item.image}
                                  className="member-avatar"
                                  style={{
                                    backgroundColor: "transparent",
                                    color: "#000",
                                  }}
                                  icon={
                                    <img
                                      src={logo}
                                      alt="PGDC's member"
                                      className="member-avatar-default"
                                      style={{ objectFit: "unset" }}
                                    />
                                  }
                                />
                              </a>
                            </Tooltip>
                            <h3 className="font-bold text-dark-blue">
                              {item.name}
                            </h3>
                          </div>
                        ))}
                      </div>
                    ))
                  }
                </Carousel>
                <Divider />
                <p className="text-dark-blue font-bold text-2xl my-4">
                  Game Designers
                </p>
                <Carousel
                  arrows
                  infinite={true}
                  autoplaySpeed={10000}
                  autoplay
                  dots={false}
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
                      length: Math.ceil(
                        membersData.members.designers.length / 4
                      ),
                    }).map((_, index) => (
                      <div key={index} className="">
                        {Array.from(
                          membersData.members.designers.slice(
                            index * 4,
                            index * 4 + 4
                          )
                        ).map((item, index) => (
                          <div
                            key={index}
                            className="member-item grid grid-cols-1"
                          >
                            <Tooltip
                              key={index}
                              title="Open profile"
                              placement="bottom"
                            >
                              <a
                                href={item.links[0].url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <Avatar
                                  key={index}
                                  src={item.image}
                                  className="member-avatar"
                                  style={{
                                    backgroundColor: "transparent",
                                    color: "#000",
                                  }}
                                  icon={
                                    <img
                                      src={logo}
                                      alt="PGDC's member"
                                      className="member-avatar-default"
                                      style={{
                                        objectFit: "unset",
                                        overflow: "auto",
                                      }}
                                    />
                                  }
                                />
                              </a>
                            </Tooltip>
                            <h3 className="font-bold text-dark-blue">
                              {item.name}
                            </h3>
                          </div>
                        ))}
                      </div>
                    ))
                  }
                </Carousel>
                <Divider />
                <p className="text-dark-blue font-bold text-2xl my-4">
                  Event and Media
                </p>
                <Carousel
                  arrows={membersData.members.media.length > 4}
                  infinite={true}
                  autoplaySpeed={10000}
                  autoplay
                  dots={false}
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
                      length: Math.ceil(membersData.members.media.length / 4),
                    }).map((_, index) => (
                      <div key={index} className="">
                        {Array.from(
                          membersData.members.media.slice(
                            index * 4,
                            index * 4 + 4
                          )
                        ).map((item, index) => (
                          <div
                            key={index}
                            className="member-item grid grid-cols-1"
                          >
                            <Tooltip
                              key={index}
                              title="Open profile"
                              placement="bottom"
                            >
                              <a
                                href={item.links[0].url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <Avatar
                                  key={index}
                                  src={item.image}
                                  className="member-avatar"
                                  style={{
                                    backgroundColor: "transparent",
                                    color: "#000",
                                  }}
                                  icon={
                                    <img
                                      src={logo}
                                      alt="PGDC's member"
                                      style={{ objectFit: "unset" }}
                                      className="member-avatar-default"
                                    />
                                  }
                                />
                              </a>
                            </Tooltip>
                            <h3 className="font-bold text-dark-blue">
                              {item.name}
                            </h3>
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

        <section
          className="section partners"
          style={{
            gap: "1rem",
          }}
        >
          <h2 className="font-bold text-dark-blue">Partners</h2>
          <div className="section-item">
            <div
              style={{
                padding: "1rem",
                display: "block",
                width: "100%",
              }}
            >
              <div className="grid grid-cols-4 gap-4 justify-center items-center justify-items-center">
                {
                  // group of 4 members per slide get from membersData.members
                  Array.from(partnersData.partners).map((item, index) => (
                    <div key={index} className="w-20 md:w-28">
                      <img
                        key={index}
                        src={item.logo}
                        className=""
                        alt={item.name}
                      />
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <Button
            otherClasses={
              "w-fit mx-auto font-bold normal-case flex items-center justify-center gap-2"
            }
            onClick={() => {
              navigate(PATHS.PARTNERSHIP_INFO);
            }}
          >
            Partnership Information{" "}
            <RiArrowRightLine className="inline-block" />
          </Button>
        </section>
      </div>
      <input type="search" onChange={(e) => console.log(e.target.value)}/>
    </Suspense>
  );
}

export default HomePage;
