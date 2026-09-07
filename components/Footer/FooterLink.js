import Link from "next/link";

const FooterLink = ({ name, href }) => {
	return (
		<li className="footer__list-item">
			<Link className="footer__link" href={href}>
				{name}
			</Link>
		</li>
	);
}

export default FooterLink;