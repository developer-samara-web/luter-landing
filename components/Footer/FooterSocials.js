import FooterSocial from "./FooterSocial";

const FooterSocials = ({ items }) => {
	return (
		<ul className="footer__socials">
			{items && items.map((item, id) => (
				<FooterSocial key={id} {...item} />
			))}
		</ul>
	);
}

export default FooterSocials;