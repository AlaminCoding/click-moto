import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ImgList from "../../img/img-list";

const columnsCountBreakPoints = { 350: 1, 750: 2, 900: 3 };
const GalleryPhoto = () => {
  const images = [];
  for (let i = 0; i < ImgList.length; i++) {
    images.push(ImgList[i].url);
  }
  return (
    <div className="gallery-photo">
      <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
        <Masonry gutter="15px">
          {ImgList.map((image) => (
            <img
              src={image.url}
              style={{ width: "100%" }}
              alt="gallery_img"
              key={image.id}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default GalleryPhoto;
