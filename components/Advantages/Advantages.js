import "./Advantages.css";

import Title from "@/components/ui/Title/Title";
import AdvantagesItems from "./AdvantagesItems";

const Advantages = () => {

	const { header, items } = {
		header: {
			badge: 'Почему выбирают меня',
			title: 'Ваше дело в надежных руках'
		},

		items: [
			{
				image: '/images/advantages/advantages-1.webp',
				title: 'Опыт и экспертиза',
				description: 'Более 10 лет успешной практики в различных областей права.'
			},
			{
				image: '/images/advantages/advantages-2.webp',
				title: 'Индивидуальный подход',
				description: 'Каждое дело уникально. Разрабатываю стратегию специально для вас.'
			},
			{
				image: '/images/advantages/advantages-3.webp',
				title: 'Конфиденциальность',
				description: 'Гарантирую полную конфиденциальность и защиту ваших данных.'
			},
			{
				image: '/images/advantages/advantages-4.webp',
				title: 'Честность и прозрачность',
				description: 'Честно оцениваю перспективы дела и всегда на связи с клиентом.'
			},
		]
	}

	return (
		<section id="advantages" className="advantages">
			<div className="advantages__inner">
				<Title badge={header.badge} title={header.title} position="center" />
				<AdvantagesItems items={items} />
			</div>
		</section>
	);
}

export default Advantages;