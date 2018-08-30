import React, { Component } from "react";

const Experience = () => {
  return (
    <div className="container">
      <p className="lead text-left">Experience</p>
      <hr />
      <div className="row">
        <div className="col-md-12">
          <p className="lead">
            Systems Programmer &bull; MEMC, O’Fallon, MO &bull; 2016-Present
          </p>
          <ul className="list-group-flush">
            <li className="text-left">
              GUI Development using C# and .Net using design patterns.
            </li>
            <li className="text-left">
              Web development using Python Django, ASP.NET and the MVC/MVT
              pattern.
            </li>
            <li className="text-left">
              Experience developing SQL queries for persistence technologies
              like Oracle and PostgreSQL.
            </li>
            <li className="text-left">
              Experience with the Linux CLI and web server technologies like
              Nginx.
            </li>
            <li className="text-left">
              Experience using version control systems such as Git and SVN.
            </li>
            <li className="text-left">
              Experience with Jira issue liacking software to aid in
              productivity and collaboration.
            </li>
            <li className="text-left">
              Experience developing rich data visualizations using graphing
              libraries like Plotly.js.
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p className="lead">
            SOI Intern &bull; SunEdison Semiconductor O’Fallon, MO &bull; Summer
            2015
          </p>
          <ul className="list-group-flush">
            <li className="text-left">
              Assist in Silicon-on-Insulator (SOI) yield improvement activities.
            </li>
            <li className="text-left">
              Operate and oversee maintenance of the scanning electron
              microscope (SEM).
            </li>
            <li className="text-left">
              Manipulated microscopy data using Microsoft excel to determine
              source of wafer defects.
            </li>
          </ul>
          <p className="lead">
            Student &bull; University of California Santa Barbara/College of San
            Mateo &bull; 2009-2015
          </p>
          <ul className="list-group-flush">
            <li className="text-left">STEM and Computer Science coursework.</li>
          </ul>
          <p className="lead">Medic &bull; U.S. Army &bull; 2003-2009</p>
          <ul className="list-group-flush">
            <li className="text-left">
              Operated competently in the evidence based scientific field of
              medicine.
            </li>
            <li className="text-left">
              Routinely operated professionally as a member of a team to
              accomplish goals for the organization.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
