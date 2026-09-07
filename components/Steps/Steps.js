import "./Steps.css";

import Title from "@/components/ui/Title/Title";
import StepsItems from "./StepsItems";

const Steps = () => {

	const { header, items } = {
		header: {
			badge: 'Процесс',
			title: 'Как мы работаем'
		},

		items: [
			{
				number: '1',
				title: 'Консультация',
				description: 'Вы рассказываете о своей ситуации, а мы анализируем ее и оцениваем перспективы.',
			},
			{
				number: '2',
				title: 'Анализ и стратегия',
				description: 'Изучаем документы и разрабатываем стратегию защиты и план действий.',
			},
			{
				number: '3',
				title: 'Подготовка',
				description: 'Собираем необходимые доказательства и готовим правовую позицию.',
			},
			{
				number: '4',
				title: 'Действия',
				description: 'Представляем ваши интересы в суде и других инстанциях, ведем переговоры.',
			},
			{
				number: '5',
				title: 'Результат',
				description: 'Добиваемся максимально возможного результата в вашей ситуации.',
			},
		]
	}

	return (
		<section id="steps" className="steps">
			<div className="steps__inner">
				<Title badge={header.badge} title={header.title} position="center" />
				<StepsItems items={items} />
			</div>
		</section>
	);
}

export default Steps;