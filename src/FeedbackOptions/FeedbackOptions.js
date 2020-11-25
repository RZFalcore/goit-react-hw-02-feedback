import React from "react";

import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={styles.buttonsCont}>
    <button onClick={onLeaveFeedback} name={options.GOOD}>
      Good
    </button>
    <button onClick={onLeaveFeedback} name={options.NEUTRAL}>
      Neutral
    </button>
    <button onClick={onLeaveFeedback} name={options.BAD}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
