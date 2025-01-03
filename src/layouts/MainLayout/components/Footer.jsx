import { Divider, Form, Input, Tooltip } from "antd";
import Button from "../../../components/Button";
import pgdcLogo from "../../../assets/logo.jpg";
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
      className="flex flex-col p-4 gap-2"
    >
      <nav className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-row justify-between md:flex-col ">
          <img
            src={pgdcLogo}
            alt="Logo"
            style={{
              width: "150px",
            }}
          />

          <ul className="flex gap-4">
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
                  <RiFacebookCircleFill size={25} />
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
                  <RiGithubFill size={25} />
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
                  <RiYoutubeFill size={25} />
                </a>
              </Tooltip>
            </li>
          </ul>
        </div>

        <ul className="mt-6">
          <div className="flex flex-wrap gap-5">
            <li>
              <h5>Email</h5>
              <p className="text-sm">pgdc.workmail.phenikaa@gmail.com</p>
            </li>
            <li>
              <h5>Phone</h5>
              <p className="text-sm">(+84) 123456</p>
            </li>
            <li className="">
              <h5 className="flex gap-1">
                Address
                <RiExternalLinkFill size={12} />
              </h5>
              <Tooltip title="View on Google Maps" placement="bottom">
                <a
                  href="https://www.google.com/maps/place/Phenikaa+University/@20.9626162,105.7461115,17z/data=!3m1!4b1!4m16!1m9!4m8!1m0!1m6!1m2!1s0x313452efff394ce3:0x391a39d4325be464!2zUC4gTmd1eeG7hW4gVHLDoWMsIFnDqm4gTmdoxKlhLCBIw6AgxJDDtG5nLCBIw6AgTuG7mWk!2m2!1d105.7486864!2d20.9626112!3m5!1s0x313452efff394ce3:0x391a39d4325be464!8m2!3d20.9626112!4d105.7486864!16s%2Fg%2F1220whsz?entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm hover:underline"
                >
                  Phenikaa University, P. Nguyễn Trác, Yên Nghĩa, Hà Đông, Hà
                  Nội
                </a>
              </Tooltip>
            </li>
          </div>
        </ul>
      </nav>

      <div className="mt-6">
        <h2 className="text-xl font-semibold roboto">Newsletter</h2>
        <p className="text-sm">Subscribe to our newsletter to receive news and updates</p>
        <Form
          style={{
            display: "flex",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <Form.Item
            style={{
              flex: 1,
            }}
          >
            <Input placeholder="Email" className="email-input" />
          </Form.Item>
          <Form.Item>
            <Button>Subscribe</Button>
          </Form.Item>
        </Form>
      </div>

      <Divider />

      <p className="text-sm text-center text-gray-500">
        &copy; 2024 Phenikaa Game Development Club. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
