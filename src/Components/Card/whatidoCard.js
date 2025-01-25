import React from "react";
import { motion } from "framer-motion";
import "./whatidCard.css";

const whatidoCard = ({ image, heading, paragraph }) => {
  return (
    <motion.article
      className="whatidoCard"
      initial={{ y: 50, opacity: 0 }} // Start below and hidden
      whileInView={{ y: 0, opacity: 1 }} // Animate when in viewport
      viewport={{ once: false, amount: 0.2 }} // Triggers when 20% visible
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }} // Hover effect
    >
      <img src={image} alt={heading} className="whatidoCard-image" />
      <h3>{heading}</h3>
      <p>{paragraph}</p>
    </motion.article>
  );
};

export default whatidoCard;

