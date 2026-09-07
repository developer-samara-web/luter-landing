const AboutItem = ({ number, description }) => {
	return (
		<div className="about__item">
			<span className="about__number">{number}</span>
			<span className="about__description">{description}</span>
		</div>
	);
}

export default AboutItem;