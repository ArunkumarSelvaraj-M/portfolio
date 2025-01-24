import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import "./Card.css";

const Card = ({ image, heading, paragraph, link,containerClass, onClick }) => {
  return (
    <motion.article
      className="card"
      initial={{ y: 50, opacity: 0 }} // Start below and hidden
      whileInView={{ y: 0, opacity: 1 }} // Animate when in viewport
      viewport={{ once: false, amount: 0.2 }} // Triggers when 20% visible
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }} // Hover effect
      onClick={onClick}
    >
      <img src={image} alt={heading} className="card-image" />
      <h3>{heading}</h3>
      <p>{paragraph}</p>
      {/* Show "Read More" only inside blogsCards */}
      {containerClass === "blogsCards" && (
        <Link to={link} className='read-more-button' target="__blank">Read More</Link>
      )}
    </motion.article>
  );
};

export default Card;

