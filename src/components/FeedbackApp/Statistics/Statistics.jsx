import PropTypes from 'prop-types';
import {
  StatisticsWrapper,
  ReviewContainer,
  ReviewItem,
} from './Statistics.styled';
import { Notification } from 'components/Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  if (total) {
    return (
      <StatisticsWrapper>
        <ReviewContainer>
          <ReviewItem>Good: {good}</ReviewItem>
          <ReviewItem>Neutral: {neutral}</ReviewItem>
          <ReviewItem>Bad: {bad}</ReviewItem>
          <ReviewItem>Total: {total}</ReviewItem>
          <ReviewItem>Positive feedback: {positivePercentage}%</ReviewItem>
        </ReviewContainer>
      </StatisticsWrapper>
    );
  } else {
    return <Notification />;
  }
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
