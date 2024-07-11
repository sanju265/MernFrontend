import React, { useState } from 'react';
import QuizQuestion from '../components/QuizQuestion';
import QuizNavigation from '../components/QuizNavigation';
import '../styles/Quiz.css'; // Adjusted the import path for CSS

const quizData = [
    {
        id: 1,
        question: 'What is the capital of France?',
        answers: [
            { id: 'a', text: 'London' },
            { id: 'b', text: 'Paris' },
            { id: 'c', text: 'Berlin' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 2,
        question: 'Who painted the Mona Lisa?',
        answers: [
            { id: 'a', text: 'Michelangelo' },
            { id: 'b', text: 'Leonardo da Vinci' },
            { id: 'c', text: 'Pablo Picasso' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 3,
        question: "¿Qué significa la palabra 'libro'?",
        answers: [
            { id: 'a', text: 'House' },
            { id: 'b', text: 'Dog' },
            { id: 'c', text: 'Book' },
            { id: 'd', text: 'Car' }
        ],
        correctAnswer: 'c'
    },
    {
        id: 4,
        question: "¿Cuál es el plural de 'lápiz'?",
        answers: [
            { id: 'a', text: 'Lápizs' },
            { id: 'b', text: 'Lápices' },
            { id: 'c', text: 'Lápiz' },
            { id: 'd', text: 'Lápize' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 5,
        question: "¿Cómo se dice 'good morning' en español?",
        answers: [
            { id: 'a', text: 'Good night' },
            { id: 'b', text: 'Good afternoon' },
            { id: 'c', text: 'Good mornings' },
            { id: 'd', text: 'Good morning' }
        ],
        correctAnswer: 'd'
    },
    {
        id: 6,
        question: "¿Cuál es el antónimo de 'rápido'?",
        answers: [
            { id: 'a', text: 'Slow' },
            { id: 'b', text: 'Light' },
            { id: 'c', text: 'Soon' },
            { id: 'd', text: 'Close' }
        ],
        correctAnswer: 'a'
    },
    {
        id: 7,
        question: "¿Qué tiempo verbal indica una acción que se realiza habitualmente?",
        answers: [
            { id: 'a', text: 'Present' },
            { id: 'b', text: 'Past' },
            { id: 'c', text: 'Future' },
            { id: 'd', text: 'Conditional' }
        ],
        correctAnswer: 'a'
    },
    {
        id: 8,
        question: "¿Cómo se dice 'apple' en español?",
        answers: [
            { id: 'a', text: 'Orange' },
            { id: 'b', text: 'Apple' },
            { id: 'c', text: 'Banana' },
            { id: 'd', text: 'Cherry' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 9,
        question: "¿Qué significa 'escuela'?",
        answers: [
            { id: 'a', text: 'Hospital' },
            { id: 'b', text: 'School' },
            { id: 'c', text: 'Library' },
            { id: 'd', text: 'Store' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 10,
        question: "¿Cuál es la primera persona del plural del verbo 'ir' en presente?",
        answers: [
            { id: 'a', text: 'I go' },
            { id: 'b', text: 'You go' },
            { id: 'c', text: 'We go' },
            { id: 'd', text: 'They go' }
        ],
        correctAnswer: 'c'
    }
    // Add more questions as needed
];

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const handleAnswerSelect = (e) => {
        setSelectedAnswer(e.target.value);
    };

    const handleNextQuestion = () => {
        if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        if (currentQuestion + 1 < quizData.length) {
            setSelectedAnswer('');
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setQuizCompleted(true);
        }
    };

    const goToQuestion = (index) => {
        setCurrentQuestion(index);
    };

    const handleQuizCompletion = () => {
        alert('Quiz completed successfully!');
        // Redirect to lessons page after clicking OK on the alert
        window.location.href = '/lessons'; // Change this to the correct route if needed
    };

    return (
        <div className="quiz-container">
            <div className="quiz">
                <QuizNavigation
                    questions={quizData}
                    currentQuestion={currentQuestion}
                    goToQuestion={goToQuestion}
                />
                <QuizQuestion
                    question={quizData[currentQuestion]?.question}
                    answers={quizData[currentQuestion]?.answers}
                    selected={selectedAnswer}
                    handleChange={handleAnswerSelect}
                />
                <button onClick={handleNextQuestion}>Next</button>
                {quizCompleted && (
                    <div>
                        <p>Quiz completed! Your score: {score} out of {quizData.length}</p>
                        <button onClick={handleQuizCompletion}>OK</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Quiz;