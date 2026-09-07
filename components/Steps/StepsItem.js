const StepsItem = ({ number, title, description }) => {
	return (
		<div className="steps__item" >
			<div className="steps__number">
				{number}
			</div>
			<h3 className="steps__title">
				{title}
			</h3>
			<p className="steps__description">
				{description}
			</p>
		</div>
	);
}

export default StepsItem;