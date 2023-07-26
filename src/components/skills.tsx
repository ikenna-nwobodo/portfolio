import "./skills.css";

function Skills(props: any) {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skill-list">
        <div className="skill">
          <h2>Frontend Development</h2>
          <div className="techs">
            <span>TECHNOLOGIES</span>
            <div className="tech-list">
              <div className="tech">
                <img src={require("../images/logos/html.png")} alt="html" />
              </div>
              <div className="tech">
                <img src={require("../images/logos/css3.png")} alt="css" />
              </div>
              <div className="tech">
                <img src={require("../images/logos/js.png")} alt="js" />
              </div>
              <div className="tech">
                <img
                  src={require("../images/logos/react-modified.png")}
                  alt="react"
                />
              </div>
              <div className="tech">
                <img src={require("../images/logos/blaz.png")} alt="blazor" />
              </div>
              <div className="tech">
                <img
                  src={require("../images/logos/tailwind.png")}
                  alt="tailwind"
                />
              </div>
              <div className="tech">
                <img src={require("../images/logos/bs.png")} alt="bootstrap" />
              </div>
              <div className="tech">
                <img src={require("../images/logos/ts.png")} alt="typescript" />
              </div>
              <div className="tech">
                <img src={require("../images/logos/jq.png")} alt="jquery" />
              </div>
              <div className="tech">
                <img src={require("../images/logos/nxt.png")} alt="nextjs" />
              </div>
            </div>
          </div>
        </div>
        <div className="skill">
          <h2>Backend Development</h2>
          <div className="techs">
            <span>TECHNOLOGIES</span>
            <div className="tech-list">
              <div className="tech">
                <img src={require("../images/logos/node.png")} alt="node" />
              </div>
              <div className="tech">
                <img src={require("../images/logos/exps.png")} alt="express" />
              </div>
              <div className="tech">
                <img src={require("../images/logos/.net.png")} alt=".net" />
              </div>
              <div className="tech">
                <img src={require("../images/logos/mongo.png")} alt="mongo" />
              </div>
              <div className="tech">
                <img src={require("../images/logos/sql.png")} alt="sql" />
              </div>
            </div>
          </div>
        </div>
        <div className="skill">
          <h2>Graphic Design & UI/UX</h2>
          <div className="techs">
            <span>TECHNOLOGIES</span>
            <div className="tech-list">
              <div className="tech">
                <img src={require("../images/logos/ps.png")} alt="photoshop" />
              </div>
              <div className="tech">
                <img src={require("../images/logos/figma.png")} alt="figma" />
              </div>
              <div className="tech">
                <img src={require("../images/logos/xd.png")} alt="xd" />
              </div>
              <div className="tech">
                <img src={require("../images/logos/canva.png")} alt="canva" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
