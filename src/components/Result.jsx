import React from 'react';

const Result = ({ score, len, restartQuiz }) => {
  const percentage = (score / len) * 100;
  return (
    <div className="result-box">
      <h2>Quiz Completed!</h2>
      {score}
      <p>Your Score:</p>
      {/* Task 5.2: Display a custom message based on the user's score:
          - If the percentage is greater than 50%, show "Great job!"
          - If the percentage is 50% or less, show "Better luck next time!"*/}
      <p>{"Great job!"}</p>
      <button className="restart-btn" onClick={restartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;
