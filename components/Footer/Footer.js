import "./Footer.css";

import Link from "next/link";
import Image from "next/image";

import FooterSocials from "./FooterSocials";
import FooterLinks from "./FooterLinks";
import FooterContacts from "./FooterContacts";

const Footer = () => {

	const { about, socials, navigation, practices, contacts, bottom } = {
		about: {
			logo: '/images/logo.svg',
			description: 'Профессиональная юридическая помощь и защита ваших прав в любой ситуации',
		},

		socials: [
			{
				name: 'Telegram',
				href: '/',
				icon: '/images/footer/telegram.webp',
			},
			{
				name: 'Instagram',
				href: '/',
				icon: '/images/footer/instagram.webp',
			},
			{
				name: 'VK',
				href: '/',
				icon: '/images/footer/vk.webp',
			},
		],

		navigation: {
			title: 'Навигация',
			items: [
				{
					name: 'Все практики',
					href: '/#practices',
				},
				{
					name: 'Почему выбирают меня',
					href: '/#advantages',
				},
				{
					name: 'Как мы работаем',
					href: '/#steps',
				},
				{
					name: 'Ответы на вопросы',
					href: '/#faq',
				},
				{
					name: 'Отзывы клиентов',
					href: '/#reviews',
				},
				{
					name: 'Полезные статьи',
					href: '/#articles',
				},
				{
					name: 'Контакты',
					href: '/#contacts',
				},
			],
		},

		practices: {
			title: 'Практики',
			items: [
				{
					name: 'Уголовные дела',
					href: '/#practices',
				},
				{
					name: 'Гражданские дела',
					href: '/#practices',
				},
				{
					name: 'Административные дела',
					href: '/#practices',
				},
				{
					name: 'Семейные дела',
					href: '/#practices',
				},
			],
		},

		contacts: {
			title: 'Контакты',
			items: [
				{
					label: 'Телефон',
					value: '+7 (995) 123-45-67',
					href: 'tel:+79951234567',
				},
				{
					label: 'Email',
					value: 'info@luter-law.ru',
					href: 'mailto:info@luter-law.ru',
				},
				{
					label: 'Адрес',
					value: 'г. Москва, ул. Муромская, д. 19',
					href: '#',
				},
				{
					label: 'Режим работы',
					value: 'Ежедневно с 9:00 до 21:00',
					href: '#',
				},
			],
		},

		bottom: {
			copyright: '© 2026 Адвокатский кабинет Лютера. Все права защищены',
			privacy: {
				name: 'Политика конфиденциальности',
				href: '/privacy',
			},
		}
	}

	return (
		<footer className="footer">
			<div className="footer__inner">
				<div className="footer__grid">

					<div className="footer__item footer__item--first">
						<Image className="footer__logo" src={about.logo} alt="Лютер & Co" width={180} height={100} />
						<div className="footer__description">{about.description}</div>
						<FooterSocials items={socials} />
					</div>

					<div className="footer__item">
						<h4 className="footer__title">
							{navigation.title}
						</h4>
						<FooterLinks items={navigation.items} />
					</div>

					<div className="footer__item">
						<h4 className="footer__title">
							{practices.title}
						</h4>
						<FooterLinks items={practices.items} />
					</div>

					<div className="footer__item">
						<h4 className="footer__title">
							{contacts.title}
						</h4>
						<FooterContacts items={contacts.items} />
					</div>
				</div>

				<div className="footer__bottom">
					<span className="footer__copyright">
						<Link className="footer__privacy" href={bottom.privacy?.href} >
							{bottom.privacy?.name}
						</Link>
						{bottom.copyright}
					</span>

					<Link href="https://samara.fun">
						<Image className="footer__designer" src="/images/samara.svg" width={100} height={100} alt="" />
					</Link>
				</div>
			</div>
		</footer>
	);
}

export default Footer;