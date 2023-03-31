import React, { useRef } from "react";
import "./Contact.css";
import Banner from "../../components/Banner/Banner";
import ContactImg from "../../assets/img/contact-bg.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FaEnvelope, FaPenAlt, FaUserAlt } from "react-icons/fa";
import { RiMessage3Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
const Contact = () => {
  const contactForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        contactForm.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Thanks for your message !", {
            position: toast.POSITION.TOP_RIGHT,
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Oups! Something went wrong :(", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      );
  };

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
          <form className="form" ref={contactForm} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">
                <span>
                  <FaUserAlt />
                </span>
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="John Doe"
              />
            </div>
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
              <button type="submit" className="form-btn">
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Contact;
