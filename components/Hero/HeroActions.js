import HeroAction from "./HeroAction";

const HeroActions = ({ buttons }) => {
	return (
		<div className="hero__actions">
			{buttons && buttons.map((item, id) => (
				<HeroAction key={id} {...item} />
			))}
		</div>
	);
}

export default HeroActions;