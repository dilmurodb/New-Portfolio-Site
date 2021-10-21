import { useEffect } from "react";
// import backgroundImage from "../images/pictureOriginal.jpg";
import mainImage from "../images/me.jpg";
const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div
      className="home-div"
      // style={{
      //   backgroundImage: `url(${backgroundImage})`,
      // }}
    >
      <img src={mainImage} alt="My Portrait" className="portrait" />
    </div>
  );
};

export default Home;
