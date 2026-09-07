import Link from "next/link";
import Image from "next/image";

const FooterSocial = ({ name, href, icon }) => {
	return (
		<li className="footer__social">
			<Link href={href} aria-label={name}>
				<Image src={icon} alt="Telegram" width={24} height={24} />
			</Link>
		</li>
	);
}

export default FooterSocial;