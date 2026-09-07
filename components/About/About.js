import "./About.css";

import Link from "next/link";
import AboutItems from "./AboutItems";

const About = () => {

	const { card, about, items, button } = {
		card: {
			firstname: 'Лютер',
			secondname: 'Андрей Валерьевич',
			job: 'Адвокат',
		},

		about: {
			badge: 'Обо мне',
			title: 'Кто я и как я работаю',
			descriptionEl1: 'Я — практикующий адвокат с более чем 10-летним опытом работы в сфере права. За годы практики я помог сотням клиентов разобраться в сложных юридических ситуациях, защитить свои права и найти оптимальное решение даже в непростых обстоятельствах.',
			descriptionEl2: 'Я внимательно изучаю каждое обращение и не использую шаблонный подход. Перед началом работы разбираюсь в обстоятельствах дела, анализирую документы и возможные риски, после чего формирую индивидуальную стратегию защиты или решения вашей задачи.'
		},

		items: [
			{
				number: '10+',
				description: 'Лет практики'
			},
			{
				number: '500+',
				description: 'Успешных дел'
			},
			{
				number: '98%',
				description: 'Довольных клиентов'
			}
		],

		button: {
			name: 'Узнать подробнее',
			url: '#'
		}
	}

	return (
		<section id="about" className="about">
			<div className="about_inner">
				<div className="about__card">
					<div className="about__name">
						<h3 className="about__first-name">{card.firstname}</h3>
						<h4 className="about__second-name">{card.secondname}</h4>
					</div>
					<span className="about__line"></span>
					<span className="about__jop">{card.job}</span>
				</div>
				<div className="about__informations">
					<div className="about__badge">{about.badge}</div>
					<h2 className="about__title">{about.title}</h2>
					<p className="about_description">{about.descriptionEl1}</p>
					<p className="about_description">{about.descriptionEl2}</p>
					<AboutItems items={items} />
					<Link className="about__link" href={button.url}>{button.name}</Link>
				</div>
			</div>
		</section>
	);
}

export default About;