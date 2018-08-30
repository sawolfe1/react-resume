import React, { Component } from "react";

const Skills = () => {
  return (
    <div className="container">
      <p className="lead text-left">Skills and Projects</p>
      <hr />
      <div className="row">
        <div className="col-md-6">
          <ul className="list-group-flush">
            <li className="text-left">C#, VB.Net</li>
            <li className="text-left">Python</li>
            <li className="text-left">JavaScript</li>
            <li className="text-left">React.js</li>
            <li className="text-left">Plotly.js</li>
          </ul>
        </div>
        <div className="col-md-6">
          <ul className="list-group-flush">
            <li className="text-left">Django Web Framework</li>
            <li className="text-left">ASP.NET MVC, WebAPI</li>
            <li className="text-left">Bootstrap, CSS, & HTML</li>
            <li className="text-left">Git, SVN, Jira</li>
            <li className="text-left">Oracle, PostgreSQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
