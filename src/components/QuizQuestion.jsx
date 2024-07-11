import React from 'react';

const QuizQuestion = ({ question, answers, selected, handleChange }) => {
    return (
        <div className="quiz-question">
            <h3>{question}</h3>
            <ul>
                {answers.map(answer => (
                    <li key={answer.id}>
                        <label>
                            <input
                                type="radio"
                                value={answer.id}
                                checked={selected === answer.id}
                                onChange={handleChange}
                            />
                            {answer.text}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuizQuestion;
