import React, {useEffect, useState} from "react";
import "./Services.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import ServiceImg1 from "../../assets/img/service-img-1.jpg";
import ServiceImg2 from "../../assets/img/service-img-2.jpg";
import ServiceImg3 from "../../assets/img/service-img-3.jpg";

import { FaPenNib, FaChartLine, FaDraftingCompass } from "react-icons/fa";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import client from "../../client"
const Services = () => {
  const [services, setServices] = useState([])
  useEffect(()=>{
    client.fetch(`*[_type=='service']{
    type,
    description,
    image{
      asset->{
        _id,
        url
      }
    }
    }`)
        .then((data)=> setServices(data))
        .catch((error)=>console.log(`Error while fetching services data :${error}`))
  },[])
  console.log(services)
  return (
    <section className="services section">
      <div className="services-top">
        <SectionTitle title={"Services"} />
      </div>
      <div className="services-content">
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          className="service-content-left"
        >
          <figure>
            <img src={ServiceImg1} alt="Creative" />
          </figure>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          className="service-content-right"
        >
          <h2>
            {" "}
            <span>
              <FaPenNib />
            </span>{" "}
            Design
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            quia saepe dicta, nobis iure debitis esse exercitationem soluta
            repellat autem dolorem? Laudantium aspernatur minus quo facere, quis
            temporibus mollitia cumque repudiandae perferendis voluptatum ex
            accusantium consequuntur. Quia, corrupti, et accusantium dolorum
            itaque atque esse, molestias officia labore qui assumenda ea.
          </p>
          <a href="#" className="btn btn-sm">
            Learn More
          </a>
        </motion.div>
      </div>
      <div className="services-content">
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          className="service-content-right"
        >
          <h2>
            {" "}
            <span>
              <FaChartLine />
            </span>{" "}
            Develop
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            quia saepe dicta, nobis iure debitis esse exercitationem soluta
            repellat autem dolorem? Laudantium aspernatur minus quo facere, quis
            temporibus mollitia cumque repudiandae perferendis voluptatum ex
            accusantium consequuntur. Quia, corrupti, et accusantium dolorum
            itaque atque esse, molestias officia labore qui assumenda ea.
          </p>
          <a href="#" className="btn btn-sm">
            Learn More
          </a>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          className="service-content-left"
        >
          <figure>
            <img src={ServiceImg2} alt="Develop" />
          </figure>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        className="services-content"
      >
        <div className="service-content-left">
          <figure>
            <img src={ServiceImg3} alt="Promote" />
          </figure>
        </div>
        <div className="service-content-right">
          <h2>
            {" "}
            <span>
              <FaDraftingCompass />
            </span>{" "}
            Create
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            quia saepe dicta, nobis iure debitis esse exercitationem soluta
            repellat autem dolorem? Laudantium aspernatur minus quo facere, quis
            temporibus mollitia cumque repudiandae perferendis voluptatum ex
            accusantium consequuntur. Quia, corrupti, et accusantium dolorum
            itaque atque esse, molestias officia labore qui assumenda ea.
          </p>
          <a href="#" className="btn btn-sm">
            Learn More
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
