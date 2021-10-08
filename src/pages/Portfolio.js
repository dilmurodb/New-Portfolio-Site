import { useEffect } from "react";
const Portfolio = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <h1>Portfolio</h1>
      <p>
        These are some of the projects I have built so far. Please click the
        Icons below to see my projects.
      </p>
    </div>
  );
};

export default Portfolio;
