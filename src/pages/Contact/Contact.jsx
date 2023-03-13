import React from "react";
import "./Contact.css";
import Banner from "../../components/Banner/Banner";
import ContactImg from "../../assets/img/contact-bg.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FaEnvelope, FaPenNib, FaPenAlt } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { RiMessage3Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
const Contact = () => {
  return (
    <div className="contact page">
      <Banner title={"Contact Us"} image={ContactImg} />
      <section className="contact-content">
        <SectionTitle title={"Let's Work Together"} />
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          className="contact-form"
        >
          <form className="form">
            <div className="form-group">
              <label htmlFor="email">
                <span>
                  <FaEnvelope />
                </span>
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="email@example.cc"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">
                <span>
                  <FaPenAlt />
                </span>
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                placeholder="For some business inquiries..."
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">
                <span>
                  <RiMessage3Fill />
                </span>
                Message
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Type something for us..."
              ></textarea>
            </div>
            <div className="form-group">
              <button className="form-btn">Send Message</button>
            </div>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
