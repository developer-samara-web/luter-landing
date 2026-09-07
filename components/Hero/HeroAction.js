const HeroAction = ({ name, event, type, icon }) => {
	return (
		<button className={`hero__button ${type}`}>
			{name}
			{icon}
		</button>
	);
}

export default HeroAction;