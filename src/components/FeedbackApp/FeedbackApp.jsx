import { useState } from 'react';
import PropTypes from 'prop-types';
import { Section } from './Section';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export function FeedbackApp({ initialGood, initialNeutral, initialBad }) {
  const [good, setGood] = useState(initialGood);
  const [neutral, setNeutral] = useState(initialNeutral);
  const [bad, setBad] = useState(initialBad);

  const changeState = state => state + 1;

  const onLeaveFeedback = evt => {
    switch (evt.target.name) {
      case 'good':
        setGood(changeState);
        break;
      case 'neutral':
        setNeutral(changeState);
        break;
      case 'bad':
        setBad(changeState);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <Section title="Please leave a feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={good + neutral + bad}
          positivePercentage={Math.round((good / (good + neutral + bad)) * 100)}
        />
      </Section>
    </>
  );
}

FeedbackApp.propTypes = {
  initialGood: PropTypes.number.isRequired,
  initialNeutral: PropTypes.number.isRequired,
  initialBad: PropTypes.number.isRequired,
};
