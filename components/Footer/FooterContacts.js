import FooterContact from "./FooterContact";

const FooterContacts = ({ items }) => {
	return (
		<ul className="footer__contacts">
			{items && items.map((item, id) => (
				<FooterContact key={id} {...item} />
			))}
		</ul>
	);
}

export default FooterContacts;