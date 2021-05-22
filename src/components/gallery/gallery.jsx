import React from "react";
import GalleryNav from "./gallery-nav";
import GalleryPhoto from "./gallery-photos";

const Gallery = () => {
  return (
    <div className="gallery-wrapper">
      {/* Navigation of Gallery */}
      <GalleryNav />
      {/* Main Gallery */}
      <GalleryPhoto />
    </div>
  );
};

export default Gallery;
