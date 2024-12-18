import { Button, Form, Input, Tooltip } from "antd";
import pgdcLogo from "../../../assets/logo.jpg";
import { RiFacebookCircleFill, RiGithubFill } from "react-icons/ri";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#f5f5f5",
        padding: "1rem",
      }}
    >
      <nav className="navbar footer">
        <img
          src={pgdcLogo}
          alt="Logo"
          style={{
            width: "150px",
          }}
        />

        <div
          className="footer-content"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            justifyContent: "space-between",
          }}
        >
          <ul className="footer-contact">
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
          </ul>

          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <p>Subscribe to our newsletter to receive news and updates</p>
            <Form style={{
              display: "flex",
              gap: "1rem",
            }}>
              <Form.Item style={{
                flex: 1,
              }}>
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item>
                <Button>
                  Subscribe
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>

        <ul className="footer-social">
          <Tooltip title="Facebook">
            <li>
              <a
                href="https://www.facebook.com/pgdc.phenikaa"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#4267B2",
                }}
              >
                <RiFacebookCircleFill size={50} />
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
                <RiGithubFill size={50} />
              </a>
            </li>
          </Tooltip>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
