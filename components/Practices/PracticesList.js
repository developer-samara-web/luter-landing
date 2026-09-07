import PracticesItem from "./PracticesItem";

const PracticesList = ({ items }) => {
	return (
		<div className="practices__list">
			{items && items.map((items, id) => (
				<PracticesItem key={id} {...items} />
			))}
		</div>
	);
}

export default PracticesList;