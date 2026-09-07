import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

const PracticesItem = ({ name, description, image, url }) => {
	return (
		<div className={`practices__item`} style={{ backgroundImage: `linear-gradient(to left, transparent 10%, rgba(0,0,0,1) 100%), url("${image}")`}}>
			<div className="practices__row">
				<h3 className="practices__name">{name}</h3>
				<p className="practices_description">{description}</p>
			</div>
			<Link href={url} className="practices__link">
				<span className="">Подробнее</span>
				<ArrowLongRightIcon className="practices__icon" />
			</Link>
		</div>
	);
}

export default PracticesItem;