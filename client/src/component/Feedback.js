import "../styles/feedback.css";
import FeedbackCard from "./FeedbackCard";


const Feedback = ({ ping,setPing }) => {
  
  return (
    <>
      <FeedbackCard ping={ping} setPing={setPing} />
      
    </>
  );
};

export default Feedback;
