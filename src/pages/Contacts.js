import { useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import Resume from "../images/resume.pdf";
library.add(fab, fas, far);

const Contacts = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="contacts">
      <div>
        <h1>Contact Information</h1>
      </div>
      <div>
        <h3>E-Mail</h3>
        <p>dilmurod.bukharov@gmail.com</p>
      </div>
      <div>
        <h3>Phone</h3>
        <p>Mobile Number: +1(412)758-1167</p>
      </div>
      <div style={{ display: `flex`, flexDirection: `row` }}>
        <div style={{ marginRight: `30px` }}>
          <h4>GitHub</h4>
          <a
            href="https://github.com/dilmurodb"
            target="_blank"
            rel="noreferrer"
            style={{ color: `black` }}
          >
            <FontAwesomeIcon icon={["fab", "github-square"]} size="3x" />
          </a>
        </div>
        <div>
          <h4>LinkedIn</h4>
          <a
            href="https://www.linkedin.com/in/d-bukharov/"
            target="_blank"
            rel="noreferrer"
            style={{ color: `black` }}
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" />
          </a>
        </div>
        <div style={{ marginLeft: `30px` }}>
          <h4>Resume</h4>
          <a href={Resume} download style={{ color: `black` }}>
            <FontAwesomeIcon icon={faFileDownload} size="3x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
