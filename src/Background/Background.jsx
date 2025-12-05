import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import "/src/Background/Background.css"
const Background = () => {
  return (
    <div className="background-blur position-fixed d-flex justify-content-center align-items-center top-0 overflow-hidden">
      <div className="frame">
        <span className="content1"></span>
        <span className="content2"></span>
        <span className="content3"></span>
      </div>
    </div>

  );
};

export default Background;
