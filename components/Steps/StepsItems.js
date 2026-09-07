import StepsItem from "./StepsItem";

const StepsItems = ({ items }) => {
	return (
		<div className="steps__list">
			<div className="steps__line" />
			<div className="steps__items">
				{items.map((item, id) => (
					<StepsItem key={id} {...item} />
				))}
			</div>
		</div>
	);
}

export default StepsItems;