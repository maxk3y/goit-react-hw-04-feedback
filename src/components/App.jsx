import { Wrapper } from './wrapper';
import { FeedbackApp } from './FeedbackApp/FeedbackApp';

export const App = () => {
  return (
    <Wrapper>
      <FeedbackApp initialGood={0} initialNeutral={0} initialBad={0} />
    </Wrapper>
  );
};
