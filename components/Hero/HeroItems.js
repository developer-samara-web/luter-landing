import HeroItem from "./HeroItem";

const HeroItems = ({ items }) => {
	return (
		<ul className="hero__advantages">
			{items && items.map((item, id) => (
				<HeroItem key={id} {...item} />
			))}
		</ul>
	);
}

export default HeroItems;