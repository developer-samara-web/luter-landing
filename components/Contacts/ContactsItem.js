import Image from "next/image";

const ContactsItem = ({ icon, badge, name, description }) => {
	return (
		<li className="contacts__item">
			{icon}
			<div className="contacts__line">
				<div className="contacts__line-badge">{badge}</div>
				<div className="contacts__line-name">{name}</div>
				<div className="contacts__line-description">{description}</div>
			</div>
		</li>
	);
}

export default ContactsItem;