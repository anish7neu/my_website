import Navbar from "../../shared/Navbar";
import "../home/Home.css";
import Skills from "../skills/Skills";
import Works from "../works/Works";
import Blogs from "../blogs/Blogs";
import Contact from "../contact/Contact";
import MyInfo from "../../myInfo/MyInfo";
const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <div className="single-div">
        <MyInfo />
      </div>
      <div className="single-div">
        <Skills />
      </div>
      <div className="single-div">
        <Works />
      </div>
      <div className="single-div">
        <Blogs />
      </div>
      <div className="single-div">
        <Contact />
      </div>
    </div>
  );
};
export default Home;
