import { Metadata } from "next";
import { Carousel, Tooltip } from "antd";
import { inter } from "./ui/fonts";
import "@/app/ui/styles/pages/home.scss";
import { activites, carouselData, members, partners } from "./data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Phenikaa Game Development Club",
  description: "Phenikaa Game Development Club",
};

export default function Home() {
  return (
    <>
      <Carousel arrows infinite={true} className="w-full h-[600px]">
        {carouselData.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
            className="object-cover aspect-video w-full !h-[600px]"
            loading="lazy"
          />
        ))}
      </Carousel>
      <div className="max-w-[1280px] mx-auto">
        <section
          className="flex justify-between gap-10 items-start w-full px-4 py-8"
          id="about"
        >
          <div className="basis-1/2">
            <img src="/images/04.jpg" alt="4" className="rounded-md " />
          </div>
          <div className="basis-1/2">
            <h1 className="text-5xl font-bold text-right text-blue">
              About Us
            </h1>
            <p
              className={`text-base mt-4 text-left ${inter.className} flex flex-col gap-4 !font-medium`}
            >
              <span className="block">
                The{" "}
                <span className="text-orange">
                  Phenikaa Game Development Club (PGDC)
                </span>{" "}
                is a student-founded community at Phenikaa University, dedicated
                to empowering students in game design and development.
              </span>
              <span className="block">
                Born from a shared passion for creativity and technology, PGDC
                provides a space for learning, collaboration, and innovation.
                Through workshops, events, and showcases, we strive to help
                members turn their ideas into impactful games and connect with
                the broader game development community.
              </span>
            </p>
          </div>
        </section>

        <section className="flex flex-col w-full px-4 py-8 gap-8">
          <h1 className="text-5xl font-bold text-left text-blue">
            Our Activities
          </h1>
          <div className="grid grid-cols-2 gap-8 mt-4">
            {activites.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-[200px] aspect-square mb-4"
                />
                <h2 className="text-lg font-bold text-blue uppercase">
                  {item.name}{" "}
                  <span className="text-orange">{item.highlight}</span>
                </h2>
                <p
                  className={`text-sm ${inter.className} text-center max-w-[400px]`}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col w-full px-4 py-8 gap-8">
          <h1 className="text-5xl font-bold text-left text-blue">
            Our Leaders
          </h1>
          <div className="grid grid-cols-3 gap-8 mt-4">
            {members.map((item, index) => (
              <div
                key={index}
                className="mt-4 flex flex-col justify-center items-center"
              >
                <Avatar className="w-[180px] h-[180px] mb-4">
                  <AvatarImage src={item.avatar} alt={item.name} />
                  <AvatarFallback>
                    <Image
                      src="/logo_plain_lg.svg"
                      alt="Member"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-blue text-lg font-bold">{item.name}</h3>
                <p className="text-sm font-medium">{item.role}</p>
                {item.link && (
                  <Tooltip title="Facebook" placement="bottom">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0866ff] text-lg mt-2"
                    >
                      <FaFacebook size={24} />
                    </a>
                  </Tooltip>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col w-full px-4 py-8 gap-8">
          <h1 className="text-5xl font-bold text-left text-blue">Partners</h1>
          <div className="grid grid-cols-4 gap-8 mt-4 items-center justify-items-center">
            {partners.map((item, index) => (
              <Tooltip title={item.name} placement="bottom" key={index}>
                <Image
                  key={index}
                  src={item.logo}
                  alt={item.name}
                  className="object-contain aspect-square cursor-pointer"
                  width={150}
                  height={150}
                />
              </Tooltip>
            ))}
          </div>
          <a
            href="https://docs.google.com/presentation/d/e/2PACX-1vTT72TzBirHZ9URhoSEs1p3Elsru4pJNIH4cbthBbdKy-6ZtR6yqeBxY5WDJYJ_ASo3VaasAg-zCo8v/embed?start=false&loop=false&delayms=3000&slide=id.p"
            target="_blank"
            className="text-center"
          >
            Partnership information
          </a>
        </section>

        <section className="flex flex-col w-full px-4 py-8 gap-8">
          <h1 className="text-5xl font-bold text-left text-blue">Community</h1>
          <div className="grid gap-8 mt-4 items-center justify-items-center">
            <div className="flex flex-row items-center justify-between rounded-md w-[500px] p-5 bg-[#fffaea] relative">
              <p
                className={`text-orange absolute top-[-35%] text-[96px] font-semibold ${inter.className}`}
              >
                30+
              </p>
              <h1 className="text-5xl font-medium text-blue ">Members</h1>
              <Image
                src="/images/community.png"
                alt="Community"
                width={150}
                height={150}
              />
            </div>
          </div>
          <a
            href="https://docs.google.com/presentation/d/e/2PACX-1vTT72TzBirHZ9URhoSEs1p3Elsru4pJNIH4cbthBbdKy-6ZtR6yqeBxY5WDJYJ_ASo3VaasAg-zCo8v/embed?start=false&loop=false&delayms=3000&slide=id.p"
            target="_blank"
            className="text-center"
          >
            Join us!
          </a>
        </section>
      </div>
    </>
  );
}
