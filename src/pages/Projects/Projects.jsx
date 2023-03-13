import React, { useEffect, useState } from "react";
import "./Projects.css";
import Banner from "../../components/Banner/Banner";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ProjectImg from "../../assets/img/project-bg.jpg";
import { ProjectsData } from "../../data/projects";
import ProjectsCard from "../../components/ProjectsCard/ProjectsCard";
import { FaSearch } from "react-icons/fa";
import { BiLoaderCircle } from "react-icons/bi";
import Pagination from "../../components/Pagination/Pagination";
import ButtonLink from "../../components/ButtonLink/ButtonLink";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [categories, setCatgories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(6);

  const lastProjectIndex = currentPage * projectsPerPage;
  const firstProjectIndex = lastProjectIndex - projectsPerPage;

  useEffect(() => {
    setProjects(ProjectsData.slice(firstProjectIndex, lastProjectIndex));
    setCatgories([...new Set(ProjectsData.map((project) => project.category))]);
  }, []);
  const fetchProjectsByCategories = (category) => {
    const filteredData = ProjectsData.filter(
      (item) => item.category == category
    );
    setProjects(filteredData);
  };

  const handleSearchQueries = () => {
    const filteredProjects = ProjectsData.filter((project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setProjects(filteredProjects);
  };
  // console.log(searchQuery);

  return (
    <div className="projects page">
      <Banner title={"My Projects"} image={ProjectImg} />
      <motion.section
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        className="projects-content"
      >
        <SectionTitle title={"Checkout My Works"} />
        <div className="projects-top">
          <div className="project-left">
            <div className="input-group">
              <input
                type="search"
                name="project-search"
                id="project-search"
                placeholder="search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyUp={handleSearchQueries}
              />
              <FaSearch className="search-icon" />
            </div>
          </div>
          <div className="project-right">
            <button
              className="btn filter-btn"
              onClick={() =>
                setProjects(
                  ProjectsData.slice(firstProjectIndex, lastProjectIndex)
                )
              }
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => fetchProjectsByCategories(category)}
                className="btn filter-btn"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="projects-list-group">
          {projects.map((project) => (
            <ProjectsCard key={project.id} item={project} />
          ))}
        </div>
        <div className="projects-bottom">
          <button
            className="btn btn-loading"
            onClick={() =>
              setProjects(
                ProjectsData.slice(
                  firstProjectIndex,
                  lastProjectIndex + projectsPerPage
                )
              )
            }
          >
            Load More{" "}
            <span>
              <BiLoaderCircle />
            </span>
          </button>
        </div>
        {/* <Pagination
          totalProjects={ProjectsData.length}
          itemsPerPage={projectsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        /> */}
      </motion.section>
    </div>
  );
};

export default Projects;
