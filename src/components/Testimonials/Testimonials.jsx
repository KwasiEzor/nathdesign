import React from "react";
import "./Testimonials.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import SlideCarousel from "../SlideCarousel/SlideCarousel";
import { ProjectsData } from "../../data/projects";
import ProjectsCard from "../ProjectsCard/ProjectsCard";
import Testimonial from "../Testimonial/Testimonial";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
    <section className="testimonials section">
      <div className="testimonials-top">
        <SectionTitle title={"Testimonials"} />
      </div>
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        className="testimonials-content"
      >
        <SlideCarousel slidesToShow={3} arrowsScroll={3}>
          {ProjectsData?.map((project) => (
            <Testimonial item={project} key={project.id} />
          ))}
        </SlideCarousel>
      </motion.div>
    </section>
  );
};

export default Testimonials;
