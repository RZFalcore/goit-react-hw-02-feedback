import React, { Component } from "react";

import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";

import {
  countTotalFeedback,
  countPositiveFeedbackPercentage,
} from "../utils/feedback";
import options from "../utils/options";
import styles from "./App.module.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (e) => {
    this.setState((state) => ({
      [e.target.name]: (state[e.target.name] += 1),
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    const total = countTotalFeedback(this.state);
    const positivePercentage = countPositiveFeedbackPercentage(this.state);

    return (
      <div className={styles.container}>
        <Section text={"Please leave feedback."}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section text={"Statistics"}>
          {total === 0 ?
            <Notification message={"No feedback given"} /> :  
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
        }
        </Section>
      </div>
    );
  }
}

export default App;
