import React from "react";
import "./Testimonial.css";
const Testimonial = ({ item }) => {
  return (
    <article className="testimonial-item">
      <div className="item-header">
        <figure>
          <img
            src="https://images.pexels.com/photos/265036/pexels-photo-265036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Testimonial Person"
          />
        </figure>
      </div>
      <div className="item-content">
        <h4 className="title">Title</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor itaque
          reprehenderit provident quisquam a esse. Beatae nisi fugiat voluptas
          ab! Excepturi eligendi et, porro soluta provident, autem, quam illo
          molestiae officia necessitatibus asperiores? Deleniti vitae, autem cum
          aliquam quaerat necessitatibus perspiciatis optio ut, hic delectus
          officiis ipsum, incidunt corrupti mollitia?
        </p>
      </div>
    </article>
  );
};

export default Testimonial;
