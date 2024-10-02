const Result = ({ numberOfQuestion, question, answer, isCorrect }) => {
	return (
		<div className='result'>
			<p>
				Pytanie {numberOfQuestion}. {question}
			</p>
			<p>
				Twoja odpowiedź:
				<span style={{ color: isCorrect ? '#14b814' : '#ff0000' }}>
					{answer}
				</span>
			</p>
		</div>
	);
};

export default Result;
