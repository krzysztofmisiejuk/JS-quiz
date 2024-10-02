import { useState } from 'react';
import Button from './components/Button';
import Questions from './components/Questions';
import './App.css';

function App() {
	const [startQuiz, setStartQuiz] = useState(false);
	const resetQuiz = () => {
		setStartQuiz(!startQuiz);
	};

	return (
		<>
			{!startQuiz ? (
				<div>
					<h1>JavaScript Quiz</h1>
					<Button
						content='Rozpocznij quiz'
						onClick={() => {
							setStartQuiz(!startQuiz);
						}}
					/>
				</div>
			) : (
				<Questions
					className='questions-container'
					resetQuiz={resetQuiz}
				/>
			)}
		</>
	);
}

export default App;
