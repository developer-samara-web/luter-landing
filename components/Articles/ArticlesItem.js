import Link from "next/link";
import Image from "next/image";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

const ArticlesItem = ({ image, date, title, url }) => {
	return (
		<div className="articles__item">
			<Image src={image} className="w-full" width={300} height={300} alt={title} />
			<div className="articles__content">
				<div className="articles__row">
					<div className="articles__date">{date}</div>
					<div className="articles__title">{title}</div>
				</div>
				<Link className="articles__link" href={url}>
					<span>Читать дальше</span>
					<ArrowLongRightIcon className="articles__icon" />
				</Link>
			</div>
		</div>
	);
}

export default ArticlesItem;