import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

const ReviewsItem = ({ description, avatar, name, offer }) => {
	return (
		<div className="reviews__item">
			<div className="reviews__content">
				<div className="reviews__stars">
					<StarIcon className="reviews__star" />
					<StarIcon className="reviews__star" />
					<StarIcon className="reviews__star" />
					<StarIcon className="reviews__star" />
					<StarIcon className="reviews__star" />
				</div>
				<div className="reviews__comment">
					{description}
				</div>
			</div>
			<div className="reviews__user">
				<Image className="reviews__avatar" src={avatar} width={50} height={50} alt="avatar" />
				<div className="reviews__profile">
					<div className="reviews__name">{name}</div>
					<div className="reviews__offer">{offer}</div>
				</div>
			</div>
		</div>
	);
}

export default ReviewsItem;