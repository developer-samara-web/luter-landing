import ReviewsItem from "./ReviewsItem";

const ReviewsItems = ({ items }) => {
	return (
		<div className="reviews__items">
			{items && items.map((item, id) => (
				<ReviewsItem key={id} {...item} />
			))}
		</div>
	);
}

export default ReviewsItems;