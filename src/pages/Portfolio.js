import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { faTh } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <div style={{ margin: `50px`, backgroundColor: "green" }}>
        <a
          href="https://dilmurodb.github.io/trivia/"
          target="_blank"
          rel="noopener"
          style={{ color: `white` }}
        >
          <FontAwesomeIcon icon={faBookOpen} size="5x" />
        </a>
      </div>
      <p>---</p>
      <div style={{ margin: `50px`, backgroundColor: "green" }}>
        <a
          href="https://bukharov-todo-list.herokuapp.com/"
          target="_blank"
          rel="noopener"
          style={{ color: `white` }}
        >
          <FontAwesomeIcon icon={faTasks} size="5x" />
        </a>
      </div>
      <p>---</p>
      <div style={{ margin: `50px`, backgroundColor: "green" }}>
        <a
          href="https://dilmurodb.github.io/tic-tac/"
          target="_blank"
          rel="noopener"
          style={{ color: `white` }}
        >
          <FontAwesomeIcon icon={faTh} size="5x" />
        </a>
      </div>
      <p>---</p>
      <div style={{ margin: `50px`, backgroundColor: "green" }}>
        <a
          href="https://musing-fermi-856938.netlify.com/"
          target="_blank"
          rel="noopener"
          style={{ color: `white` }}
        >
          <FontAwesomeIcon icon={faLightbulb} size="5x" />
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
