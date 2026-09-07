import AboutItem from "./AboutItem";

const AboutItems = ({ items }) => {
	return (
		<div className="about__items">
			{items && items.map((item, id) => (
				<AboutItem key={id} {...item} />
			))}
		</div>
	);
}

export default AboutItems;