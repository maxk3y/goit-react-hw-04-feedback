import PropTypes from 'prop-types';
import { FeedbackWrapper, ButtonsContainer, Button } from './Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackWrapper>
      <ButtonsContainer>
        {options.map(label => (
          <Button
            type="button"
            key={label}
            name={label}
            onClick={onLeaveFeedback}
          >
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </Button>
        ))}
      </ButtonsContainer>
    </FeedbackWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};
