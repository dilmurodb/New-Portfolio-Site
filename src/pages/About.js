import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <h1>about</h1>
      <p>
        Hello, my name is Dilmurod Bukharov, I am a Software Engineer and a
        Traveler.
      </p>
    </div>
  );
};

export default About;
