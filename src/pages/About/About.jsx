import React from "react";
import "./About.css";
import Banner from "../../components/Banner/Banner";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import AboutPerson from "../../assets/img/person2.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const About = () => {
  return (
    <div className="about page">
      <Banner title={"About Me"} />
      <section className="about-content">
        <aside className="about-left">
          <SectionTitle title={"Who Am I ?"} />
          <div className="left-text">
            <motion.p
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A saepe
              asperiores corporis molestiae dolore maxime ratione accusantium
              vel cupiditate, non esse corrupti inventore cumque distinctio
              obcaecati aliquam voluptatibus recusandae sint illo? A,
              reprehenderit officiis velit cum atque amet expedita repellendus
              qui voluptate aut adipisci quidem facere explicabo dolore deserunt
              harum vel. Quaerat vitae molestiae unde, ab itaque, omnis
              consectetur ullam nesciunt pariatur dolorum nisi nemo velit
              molestias assumenda! Expedita magnam cumque, culpa exercitationem
              commodi corporis quaerat! Molestiae provident laboriosam mollitia,
              quos numquam quibusdam. Culpa hic repellat fuga beatae, voluptatem
              possimus accusantium officiis maxime odio sint doloremque
              similique nihil eum necessitatibus!
            </motion.p>
            <motion.figure
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
            >
              <img src={AboutPerson} alt="About person" />
            </motion.figure>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default About;
