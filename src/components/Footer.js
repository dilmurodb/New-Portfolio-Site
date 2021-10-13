import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab, fas, far);
const Footer = () => {
  return (
    <div className="main-footer-div">
      <div style={{ marginRight: `10px` }}>
        <a
          href="https://www.linkedin.com/in/d-bukharov/"
          target="_blank"
          rel="noopener"
          style={{ color: `black` }}
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/dilmurodb"
          target="_blank"
          rel="noopener"
          style={{ color: `black` }}
        >
          <FontAwesomeIcon icon={["fab", "github-square"]} size="3x" />
        </a>
      </div>
      <div style={{ marginLeft: `10px` }}>
        <a
          href="https://medium.com/@dilmurod.bukharov"
          target="_blank"
          rel="noopener"
          style={{ color: `black` }}
        >
          <FontAwesomeIcon icon={["fab", "medium"]} size="3x" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
