import Button from './Button';
import Result from './Result';
import QuizDb from '../QuizDb';

const Summary = ({ result, countedResult, correctAnswer, resetQuiz }) => {
	return (
		<div className='summary'>
			<>
				<>
					<h1 style={{ color: parseInt(result) >= 80 ? 'green' : 'red' }}>
						{parseInt(result) >= 80
							? 'Gratulacje! Quiz zaliczony!'
							: 'Niestety! Quiz niezaliczony!'}
					</h1>
					<p>
						Twój wynik to:
						<span style={{ color: parseInt(result) >= 80 ? 'green' : 'red' }}>
							{result}
						</span>
						({correctAnswer} z {QuizDb.length} poprawnych odpowiedzi)
					</p>
				</>
			</>
			{countedResult.map(({ text, isCorrect }, index) => {
				return (
					<Result
						numberOfQuestion={index + 1}
						question={QuizDb[index].text}
						answer={text}
						isCorrect={isCorrect}
						key={index}
					/>
				);
			})}
			<Button
				className='reset-button'
				content='Zacznij Quiz od początku'
				onClick={resetQuiz}
			/>
		</div>
	);
};

export default Summary;