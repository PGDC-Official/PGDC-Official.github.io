import { Divider, Form, Input, Tooltip } from "antd";
import Button from "../../../components/Button";
import pgdcLogo from "../../../assets/logo.jpg";
import {
  RiFacebookCircleFill,
  RiGithubFill,
  RiYoutubeFill,
} from "react-icons/ri";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#f5f5f5",
        padding: "1rem",
      }}
    >
      <nav className="navbar-footer">
        <div>
          <img
            src={pgdcLogo}
            alt="Logo"
            style={{
              width: "150px",
            }}
          />

          <ul className="footer-social">
            <Tooltip title="Facebook">
              <li>
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
              </li>
            </Tooltip>
            <Tooltip title="Github">
              <li>
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
              </li>
            </Tooltip>
            <Tooltip title="Youtube">
              <li>
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
              </li>
            </Tooltip>
          </ul>
        </div>

        <ul className="footer-contact">
          <h4>Contact Us</h4>
          <div style={{ display: "flex", gap: "24px" }}>
            <li>
              <h5>Email</h5>
              <p>pgdc@gmail.com</p>
            </li>
            <li>
              <h5>Phone</h5>
              <p>(+84) 123456</p>
            </li>
            <li>
              <h5>Address</h5>
              <p>Phenikaa University</p>
            </li>
          </div>
        </ul>

        <div className="footer-newsletter">
          <h4>Newsletter</h4>
          <p>Subscribe to our newsletter to receive news and updates</p>
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
              <Input placeholder="Email" className="newsletter-input" />
            </Form.Item>
            <Form.Item>
              <Button>Subscribe</Button>
            </Form.Item>
          </Form>
        </div>
      </nav>

      <Divider
        style={{
          minWidth: "600px",
          width: "600px",
          margin: "0 auto",
          borderBlockStartColor: "#000",
          borderBlockStartWidth: "2px",
        }}
      />

      <p
        style={{
          textAlign: "center",
          marginTop: "1rem",
          color: "rgba(0, 0, 0, 0.5)",
          fontWeight: "normal",
          fontSize: "0.875rem",
          fontFamily:
            "'Roboto', system-ui, Avenir, Helvetica, Arial, sans-serif",
        }}
      >
        &copy; 2024 Phenikaa Game Development Club. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
