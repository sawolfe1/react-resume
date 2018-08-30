import React, { Component } from "react";

const Education = () => {
  return (
    <div className="container">
      <p className="lead text-left">Education</p>
      <hr />
      <div className="row">
        <div className="col-md-6">
          <p className="font-italic text-left">
            University of California Santa Barbara
          </p>
          <p className="text-left">Bachelors of Science in Chemistry</p>
        </div>
        <div className="col-md-6">
          <p className="font-italic text-right">Santa Barbara, CA</p>
          <p className="text-right">Summer 2015</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
