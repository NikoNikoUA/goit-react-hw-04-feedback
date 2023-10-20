import { useState } from 'react';
import { Container } from './App.styled';
import { FeedbackOptions } from '../components/FeedbackOptions/FeedbackOptions.js';
import { Section } from '../components/Section/Section';
import { Statistics } from '../components/Statistics/Statistics';
import { Notification } from '../components/Notification/Notification';

export const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });
  const { good, neutral, bad } = state;

  const totalCount = () => {
    return Object.values(state).reduce((total, number) => {
      return total + number;
    }, 0);
  };

  const percentage = total => {
    const { good } = state;

    return total !== 0 ? Math.round((good / total) * 100) : 0;
  };

  const onLeaveFeedback = option => {
    setState(prevState => {
      return {
        ...prevState,
        [option]: prevState[option] + 1,
      };
    });
  };

  const total = totalCount();

  return (
    <Container>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        {Object.values(state).some(value => value !== 0) ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentage(total)}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </Container>
  );
};
