import React from "react";
import "./Home.css";
// Libraries
import { TypeAnimation } from "react-type-animation";
// images import
import HeroImg from "../../assets/img/dark-purple-man.png";
import FuchsiaBlob from "../../assets/img/fuchsia-blob.svg";
import PurpleBlob from "../../assets/img/purple-blob.svg";
// components import
import Skills from "../../components/Skills/Skills";
import Services from "../../components/Services/Services";
import RecentProjects from "../../components/RecentProjects/RecentProjects";
import Testimonials from "../../components/Testimonials/Testimonials";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
const Home = () => {
  return (
    <div className="home page">
      <section className="hero">
        <div className="hero-left">
          <div className="hero-content">
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              Hello ! My name is
            </motion.p>
            <div className="hero-titles">
              <motion.h1
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                Nathaniel
              </motion.h1>
              <motion.h2
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.4 }}
                className="animated-title"
              >
                <TypeAnimation
                  sequence={[
                    "I am Creative Graphist",
                    3000,
                    "Imaginative Designer",
                    4000,
                    "Passionated Creator",
                    5000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                />
              </motion.h2>
            </div>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="hero-cta"
            >
              <button className="btn btn-lg">Let's Work</button>
            </motion.div>
          </div>
        </div>
        <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView={"show"}
          className="hero-right"
        >
          <img src={HeroImg} className="hero-img" alt="Hero image" />
          <img src={PurpleBlob} alt="Purple blob" className="purple-blob" />
          <img src={FuchsiaBlob} alt="Purple blob" className="fuchsia-blob" />
        </motion.div>
      </section>
      <Skills />
      <Services />
      <RecentProjects />
      <Testimonials />
    </div>
  );
};

export default Home;
