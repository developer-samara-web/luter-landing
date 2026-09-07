import FooterLink from "./FooterLink";

const FooterLinks = ({ items }) => {
	return (
		<ul className="footer__list">
			{items && items.map((item, id) => (
				<FooterLink key={id} {...item} />
			))}
		</ul>
	);
}

export default FooterLinks;