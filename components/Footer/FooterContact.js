import Link from "next/link";

const FooterContact = ({ value, label, href }) => {
	return (
		<li className="footer__contact">
			<span className="footer__contact-label">
				{label}
			</span>

			<Link className="footer__contact-link" href={href} >
				{value}
			</Link>
		</li>
	);
}

export default FooterContact;