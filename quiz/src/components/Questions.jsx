import { useState } from 'react';
import Button from './Button';
import Summary from './Summary';
import QuizDb from '../QuizDb';

const Questions = ({ className, resetQuiz }) => {
	const [questionNumber, setQuestionNumber] = useState(0);
	const [correctAnswer, setCorrectAnswer] = useState(0);
	const [countResult, setCountResult] = useState([]);

	const nextQuestion = (event, text, isCorrect) => {
		event.target.textContent === text && isCorrect
			? setCorrectAnswer(correctAnswer + 1)
			: null;
		setQuestionNumber(questionNumber + 1);
		setCountResult((prev) => [...prev, { text, isCorrect }]);
	};

	if (questionNumber >= QuizDb.length) {
		return (
			<Summary
				result={`${(correctAnswer / QuizDb.length) * 100}%`}
				countedResult={countResult}
				correctAnswer={correctAnswer}
				resetQuiz={resetQuiz}
			/>
		);
	}

	return (
		<div className={className}>
			<p>
				{questionNumber + 1}. {QuizDb[questionNumber].text}
			</p>
			{QuizDb[questionNumber].answers.map(({ text, isCorrect }, index) => {
				return (
					<Button
						content={text}
						onClick={(event) => {
							nextQuestion(event, text, isCorrect);
						}}
						key={index}
					/>
				);
			})}
		</div>
	);
};

export default Questions;
