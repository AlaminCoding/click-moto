import React from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
const GalleryNav = () => {
  return (
    <nav className="g-nav">
      <ul>
        <li className="active">All</li>
        <li>Photos</li>
        <li>Videos</li>
        <li>Freebies</li>
        <li>360</li>
      </ul>
      <div className="recommend">
        <p>
          Recommended <AiOutlineCaretDown />
        </p>
        <ul>
          <li>Most Recent</li>
          <li>Most Viewed</li>
          <li>Most Downloaded</li>
          <li>Most Appreciated</li>
        </ul>
      </div>
    </nav>
  );
};

export default GalleryNav;
