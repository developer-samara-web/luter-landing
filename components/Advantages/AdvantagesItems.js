import AdvantagesItem from "./AdvantagesItem";

const AdvantagesItems = ({ items }) => {
	return (
		<div className="advantages__items">
			{items && items.map((item, id) => (
				<AdvantagesItem key={id} {...item} />
			))}
		</div>
	);
}

export default AdvantagesItems;