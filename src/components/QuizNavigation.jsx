import React from 'react';

const QuizNavigation = ({ questions, currentQuestion, goToQuestion }) => {
    return (
        <div className="quiz-navigation">
            {questions.map((question, index) => (
                <button
                    key={index}
                    onClick={() => goToQuestion(index)}
                    className={index === currentQuestion ? 'active' : ''}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};

export default QuizNavigation;
