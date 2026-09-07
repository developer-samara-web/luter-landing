import Image from "next/image";

const AdvantagesItem = ({ image, title, description }) => {
	return (
		<div className="advantages__item">
			<Image className="advantages__icon" src={image} width={80} height={80} alt={title} />
			<div className="advantages__content">
				<div className="advantages__title">{title}</div>
				<div className="advantages__description">{description}</div>
			</div>
		</div>
	);
}

export default AdvantagesItem;