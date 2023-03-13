import React from "react";
import "./Skills.css";
import AfterEffect from "../../assets/img/after-effects-cc.svg";
import Illustrator from "../../assets/img/adobe-illustrator-cc.svg";
import PremierePro from "../../assets/img/premiere-cc.svg";
import Lightroom from "../../assets/img/lightroom-cc.svg";
import Photoshop from "../../assets/img/photoshop-cc.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
const Skills = () => {
  return (
    <section className="skills section">
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        className="skills-top"
      >
        <div className="skills-top__left">
          <figure>
            <blockquote>
              <p>
                Better Experiences, <br />
                For Better Design
              </p>
            </blockquote>
            <figcaption>-My Philosophy</figcaption>
          </figure>
        </div>
        <div className="skills-top__right">
          <a href="">Download CV</a>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        className="skills-bottom"
      >
        <div className="skill-card">
          <figure>
            <img src={Photoshop} alt="Photoshop logo" />
          </figure>
        </div>
        <div className="skill-card">
          <figure>
            <img src={Illustrator} alt="Photoshop logo" />
          </figure>
        </div>
        <div className="skill-card">
          <figure>
            <img src={Lightroom} alt="Photoshop logo" />
          </figure>
        </div>
        <div className="skill-card">
          <figure>
            <img src={AfterEffect} alt="Photoshop logo" />
          </figure>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
