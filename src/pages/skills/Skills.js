import "../skills/Skills.css";
const Skills = () => {
  return (
    <div id="skills">
      <div className="skills-main">
        <div className="header">
          <span>Skills</span>
        </div>
        <div>
          <span className="description">
            You can see all the skills that I had accumulated with passage of
            time here.
          </span>
          <br />
          <br />
          <br />
        </div>
        <div className="skills-container">
          <div className="one-skill">
            <span className="one-skill-name">Web Development</span>
            <br />
            <span className="open-close-tag">&lt;&gt;</span>
            <br />
            <span>Beginner in MERN Stack.</span>
            <br />
            <span className="open-close-tag">&lt;&#47;&gt;</span>
          </div>
          <div className="one-skill">
            <span className="one-skill-name">Data Science</span>
            <br />
            <span className="open-close-tag">&lt;&gt;</span>
            <br />
            <span>Exploring field of data science.</span>
            <br />
            <span className="open-close-tag">&lt;&#47;&gt;</span>
          </div>
          <div className="one-skill">
            <span className="one-skill-name">Blog Writing</span>
            <br />
            <span className="open-close-tag">&lt;&gt;</span>
            <br />
            <span>
              Writing for personal satisfaction and expression of self.
            </span>
            <br />
            <span className="open-close-tag">&lt;&#47;&gt;</span>
          </div>
          <div className="one-skill">Something</div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
