import "../works/Works.css";
import work1 from "../works/work1.png";

const Works = () => {
  return (
    <div id="works">
      <div className="works-container">
        <div className="header">Works</div>
        <div className="description">
          Here you will find the projects I have done.
          <br />
          <br />
          <br />
        </div>
        <div className="description">
          Built a portfolio website for a lecturer.
        </div>
        <img className="work-image" src={work1}></img>
        Link for the website is{" "}
        <a href="https://tankprasadneupane.netlify.app/" target="blank">
          here.
        </a>
      </div>
    </div>
  );
};
export default Works;
