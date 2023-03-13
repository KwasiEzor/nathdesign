import React from "react";
import "./Banner.css";
import BannerImg from "../../assets/img/banner-bg.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Banner = ({ image, title }) => {
  return (
    <motion.section
      variants={fadeIn("down", 0.3)}
      initial="hidden"
      whileInView={"show"}
      className="banner"
    >
      <figure>
        <img src={image ?? BannerImg} alt="banner image" />
        <figcaption>{title ?? "Banner title"}</figcaption>
      </figure>
    </motion.section>
  );
};

export default Banner;
