const Button = ({ onClick, content, className }) => {
	return (
		<>
			<button
				className={className}
				onClick={onClick}
			>
				{content}
			</button>
		</>
	);
};
export default Button;
