import React from "react";
import Search from "./search";

const Banner = () => {
  return (
    <section className="banner-wrapper">
      <div className="banner">
        {/* Search Component */}
        <Search />
      </div>
    </section>
  );
};

export default Banner;
