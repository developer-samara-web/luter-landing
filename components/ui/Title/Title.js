import "./Title.css";
;
const Title = ({ badge, title, position }) => {
	return (
		<section className={`section__header section__header--${position}`}>
			<div className="section__badge">{badge}</div>
			<div className="section__title">{title}</div>
		</section>
	);
}

export default Title;