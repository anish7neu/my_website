import React, { useEffect, useState } from "react";
const MyInfo = () => {
  const [visitorName, setVisitorName] = React.useState("");

  useEffect(() => {
    setVisitorName(prompt("I request you to type your name?"));
  }, []);
  return (
    <>
      <div className="my-info">
        <div className="header">Home</div>
        <div className="visitor">
          <span>Welcome {visitorName}.</span>
        </div>
        <div className="i">
          <span>I, Anish Neupane,</span>
        </div>
        <div>
          <span>am a tech enthuiast and continouous learner.</span>
          <br />
          <br />
        </div>
        <div style={{ marginTop: "40px" }}>
          <span style={{ fontSize: "20px" }}>
            <span className="open-close-tag">&lt;&gt;</span>Full stack web
            developer is my role. I am also able to play with data.
            <span className="open-close-tag">&lt;&#47;&gt;</span>
          </span>
        </div>
      </div>
    </>
  );
};
export default MyInfo;
