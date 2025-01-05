import { Divider, Form, Input, Tooltip } from "antd";
import Button from "../../../components/Button";
import pgdcLogo from "../../../assets/svg/logo_colored_lg.svg";
import {
  RiExternalLinkFill,
  RiFacebookCircleFill,
  RiGithubFill,
  RiYoutubeFill,
} from "react-icons/ri";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#f5f5f5",
      }}
      className="flex flex-col md:p-6 p-4 pt-7 gap-2"
    >
      <nav className="flex flex-col xl:flex-row xl:items-center gap-4 justify-between relative">
        <div className="flex flex-col gap-2 xl:items-center ">
          <img
            src={pgdcLogo}
            alt="Logo"
            style={{
              width: "100px",
            }}
          />
        </div>

        <ul className="flex flex-wrap items-end md:justify-center gap-5 px-3 mt-3 md:mt-0">
            <li>
              <h5 className="font-bold text-dark-blue">Email</h5>
              <p className="text-sm inter">pgdc.workmail.phenikaa@gmail.com</p>
            </li>
            <li className="">
              <h5 className="flex gap-1 font-bold text-dark-blue">
                Address
                <RiExternalLinkFill size={12} />
              </h5>
              <Tooltip title="View on Google Maps" placement="bottom">
                <a
                  href="https://www.google.com/maps/place/Phenikaa+University/@20.9626162,105.7461115,17z/data=!3m1!4b1!4m16!1m9!4m8!1m0!1m6!1m2!1s0x313452efff394ce3:0x391a39d4325be464!2zUC4gTmd1eeG7hW4gVHLDoWMsIFnDqm4gTmdoxKlhLCBIw6AgxJDDtG5nLCBIw6AgTuG7mWk!2m2!1d105.7486864!2d20.9626112!3m5!1s0x313452efff394ce3:0x391a39d4325be464!8m2!3d20.9626112!4d105.7486864!16s%2Fg%2F1220whsz?entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm hover:underline inter"
                >
                  Phenikaa University, P. Nguyễn Trác, Yên Nghĩa, Hà Đông, Hà
                  Nội
                </a>
              </Tooltip>
            </li>
        </ul>

        <ul className="flex justify-center gap-4 social-links xl:relative absolute right-0">
          <li>
            <Tooltip title="Facebook" placement="bottom">
              <a
                href="https://www.facebook.com/pgdc.phenikaa"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#000",
                }}
              >
                <RiFacebookCircleFill size={40} color="#0866ff" />
              </a>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Github" placement="bottom">
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#000",
                }}
              >
                <RiGithubFill size={40} color="#1f2328" />
              </a>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Youtube" placement="bottom">
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#000",
                }}
              >
                <RiYoutubeFill size={40} color="#ff0000" />
              </a>
            </Tooltip>
          </li>
        </ul>
      </nav>

      <div className="mt-6 newsletter">
        <h2 className="text-2xl font-semibold roboto text-dark-blue">Newsletter</h2>
        <p className="text-sm">
          Subscribe to our newsletter to receive news and updates
        </p>
        <Form
          className="flex flex-col md:flex-row gap-1 md:gap-1 mt-4"
        >
          <Form.Item
            style={{
              flex: 1,
            }}
          >
            <Input placeholder="Email" className="email-input" />
          </Form.Item>
          <Form.Item className="self-end">
            <Button>Subscribe</Button>
          </Form.Item>
        </Form>
      </div>

      <Divider />

      <p className="text-sm text-center text-gray-500">
        &copy; 2025 Phenikaa Game Development Club
      </p>
    </footer>
  );
}

export default Footer;
