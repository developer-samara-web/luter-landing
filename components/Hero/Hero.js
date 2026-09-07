import "./Hero.css";

import Image from "next/image";
import HeroItems from "./HeroItems";
import HeroActions from "./HeroActions";
import { AcademicCapIcon, ArrowLongRightIcon, ShieldCheckIcon, UserCircleIcon } from "@heroicons/react/24/solid";

const Hero = () => {

	const { header, items, buttons } = {

		header: {
			firstname: 'Лютер',
			secondname: 'Андрей Валерьевич',
			description: 'Опытный адвокат с индивидуальным подходом к каждому делу. Защищаю ваши интересы в сложных ситуациях.'
		},

		buttons: [
			{
				name: 'Получить консультацию',
				type: 'hero__button--primary',
				event: '#'
			},
			{
				name: 'Все практики',
				type: 'hero__button--secondary',
				icon: <ArrowLongRightIcon className="size-4" />,
				event: ''
			}
		],

		items: [
			{
				description: 'Более 10 лет практики',
				icon: <AcademicCapIcon className="hero__icon" />
			},
			{
				description: 'Индивидуальный подход',
				icon: <UserCircleIcon className="hero__icon" />
			},
			{
				description: 'Конфиденциальность',
				icon: <ShieldCheckIcon className="hero__icon" />
			}
		]
	}

	return (
		<section className="hero">
			<div className="hero__inner">
				<div className="hero__content">
					<div className="hero__header">
						<div className="hero__first-name">{header.firstname}</div>
						<div className="hero__second-name">{header.secondname}</div>
						<div className="hero__description">{header.description}</div>
					</div>
					<HeroActions buttons={buttons} />
					<HeroItems items={items} />
				</div>
				<Image className="hero__picture" src="/images/hero/hero.webp" width={700} height={700} alt="Hero" />
			</div>
		</section>
	);
}

export default Hero;