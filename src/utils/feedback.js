export function countTotalFeedback(state) {
  const result = Object.values(state).reduce((acc, key) => (acc += key), 0);
  return result;
}

export function countPositiveFeedbackPercentage(state) {
  const total = countTotalFeedback(state);
  return total === 0 ? 0 : Math.floor((state.good / total) * 100);
}
