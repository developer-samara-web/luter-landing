import "./Contacts.css";

import Title from "@/components/ui/Title/Title";
import ContactsItems from "./ContactsItems";
import { AcademicCapIcon, PhoneIcon, EnvelopeOpenIcon, MapPinIcon, ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";

const Contacts = () => {

	const { header, items } = {
		header: {
			badge: 'Контакты',
			title: 'Свяжитесь со мной',
			description: 'Оставьте заявку на консультацию, и я свяжусь с вами в ближайшее время для обсуждения вашей ситуакции.'
		},

		items: [
			{
				icon: <PhoneIcon className="contacts__icon" />,
				badge: 'Телефон:',
				name: '+7 (927) 360-60-06',
				description: 'с 9:00 до 21:00'
			},
			{
				icon: <EnvelopeOpenIcon className="contacts__icon" />,
				badge: 'Email:',
				name: 'luter.advokat@gmail.com',
				description: 'Отвечу в течении 10 минут'
			},
			{
				icon: <MapPinIcon className="contacts__icon" />,
				badge: 'Адрес:',
				name: 'Муромская улица, 29, Москва, 111621',
				description: 'По предварительной записи'
			},
			{
				icon: <ChatBubbleBottomCenterTextIcon className="contacts__icon" />,
				badge: 'Меседжеры:',
				name: '@luter.advokat',
				description: 'Telegram, WhatsApp, Viber'
			}
		]
	}
	
	return (
		<section id="contacts" className="contacts">
			<div className="contacts__inner">
				<div className="contacts__left">
					<Title badge={header.badge} title={header.title} position="left" />
					<div className="contacts__description">{header.description}</div>
					<ContactsItems items={items} />
				</div>
				<div className="contacts__right">
					<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A69f1f07306bfcb3ef27b88c0dfe0369186549d7f5b0534f61edd9e33fbd381a2&amp;source=constructor" width="963" height="500" frameBorder="0"></iframe>
					<div className="contacts__right-item">
						<AcademicCapIcon className="contacts__right-icon" />
						<div className="contacts__right-content">
							<div className="contacts__right-address">Муромская улица, 29, Москва, 111621</div>
							<div className="contacts__right-description">Схема проезда</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contacts;