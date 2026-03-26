import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="GoharAbbas2122804@gmail.com" data-cursor="disable">
                GoharAbbas2122804@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>BS in Computer Science</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/GoharAbbas2122804"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/gohar-abbas-106519321/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com/GoharAbbas96365"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter formerly X <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/goharabbas2122804?igsh=MXd2YXFxd2E5ODhmbw=="
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Gohar Abbas</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
