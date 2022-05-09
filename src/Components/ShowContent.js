import React, { useState } from "react";
import "./ShowContent.css";
function ShowContent() {
  const [show, setShow] = useState(false);

  return (
    <div className={`show-content ${show ? "active" : ""}`}>
      <div className="heading" onClick={() => setShow((prev) => !prev)}>
        <p>Show Content</p>
        <div className="icon">
          <span className="close">
            <i class="fa-solid fa-chevron-left"></i>
          </span>
          <span className="open">
            <i class="fa-solid fa-chevron-down"></i>
          </span>
        </div>
      </div>
      <div className="info-show">
        <h2>Overview</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At suscipit
          pariatur molestiae perferendis minima maiores delectus soluta quaerat
          ullam iure?
        </p>
      </div>
    </div>
  );
}

export default ShowContent;
