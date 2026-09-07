import "./Articles.css";

import Title from "@/components/ui/Title/Title";
import ArticlesItems from "./ArticlesItems";

const Articles = () => {

	const { header, items } = {
		header: {
			badge: 'Полезные статьи',
			title: 'Актуальная информация'
		},

		items: [
			{
				image: '/images/articles/articles-1.webp',
				date: '15 августа 2025',
				title: 'Что делать при задержании? Права и обязанности. Разбираем, как правильно вести себя при задержании, какие у вас есть права и что важно знать до встречи с адвокатом.',
				url: '#'
			},
			{
				image: '/images/articles/articles-2.webp',
				date: '21 августа 2025',
				title: 'Как разделить имущество при разводе? Рассказываем, какое имущество подлежит разделу, как защитить свои интересы и избежать распространённых ошибок.',
				url: '#'
			},
			{
				image: '/images/articles/articles-3.webp',
				date: '23 августа 2025',
				title: 'Взыскание долга: порядок действий. Разбираем эффективный порядок взыскания задолженности и рассказываем, что делать, если должник отказывается...',
				url: '#' 
			},
			{
				image: '/images/articles/articles-4.webp',
				date: '15 августа 2025',
				title: 'Трудовые споры: как защитить свои права? Разбираем наиболее частые нарушения со стороны работодателей и рассказываем, как законно отстоять свои интересы.',
				url: '#'
			}
		]
	}
	
	return (
		<section id="articles" className="articles">
			<div className="articles__inner">
				<Title badge={header.badge} title={header.title} position="center" />
				<ArticlesItems items={items} />
			</div>
		</section>
	);
}

export default Articles;