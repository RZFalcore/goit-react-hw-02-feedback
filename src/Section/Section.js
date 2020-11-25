import React from "react";
import PropTypes from "prop-types";
import styles from "./Section.module.css";

const Section = ({ text, children }) => (
  <>
    <h1 className={styles.title}>{text}</h1>
    {children}
  </>
);

Section.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Section;
