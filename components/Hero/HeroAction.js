const HeroAction = ({ name, event, type, icon }) => {
	return (
		<button onClick={event || undefined} className={`hero__button ${type}`}>
			{name}
			{icon}
		</button>
	);
}

export default HeroAction;