const HeroItem = ({ icon, description }) => {
	return (
		<li className="hero__advantage">
			{icon}
			<span>{description}</span>
		</li>
	);
}

export default HeroItem;