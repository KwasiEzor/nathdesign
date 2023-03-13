import React, { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./RecentProjects.css";
import { FaArrowRight, FaArrowAltCircleRight } from "react-icons/fa";
import { ProjectsData } from "../../data/projects";
import ButtonLink from "../ButtonLink/ButtonLink";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const RecentProjects = () => {
  const [projects, setProjects] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setProjects(ProjectsData);
    setCollection([...new Set(ProjectsData.map((item) => item.category))]);
  }, []);

  const filterProjects = (projectItem) => {
    const filteredData = ProjectsData.filter(
      (item) => item.category == projectItem
    );
    setProjects(filteredData);
  };

  console.log(collection);
  return (
    <section className="recent-projects section">
      <div className="recent-projects-top">
        <SectionTitle title={"Recent Works"} />
      </div>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        className="recent-projects-group"
      >
        <div className="recent-projects-filters">
          <button
            className="btn btn-filter"
            onClick={() => setProjects(ProjectsData)}
          >
            All
          </button>
          {collection.map((item, index) => (
            <button
              className="btn btn-filter"
              onClick={() => filterProjects(item)}
              key={index}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="recent-projects-list">
          {projects.map((project) => (
            <div className="project-item" key={project.id}>
              <figure>
                <img src={project.img} alt={project.title} />
              </figure>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        className="recent-projects-footer"
      >
        <ButtonLink
          text={"See More Projects"}
          icon={<FaArrowAltCircleRight />}
          href={"/projects"}
        />
      </motion.div>
    </section>
  );
};

export default RecentProjects;
