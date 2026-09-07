import "./Practices.css";

import PracticesList from "./PracticesList";

const Practices = () => {

	const { items } = {
		items: [
			{
				name: 'Уголовные дела',
				description: 'Защита на всех стадиях уголовного процесса. От консультации до представления интересов в суде.',
				image: '/images/practices/practices-1.webp',
				url: '#'
			},
			{
				name: 'Семейные дела',
				description: 'Решение процесса развода и раздела имущества. Защита ваших интересов и интересов детей.',
				image: '/images/practices/practices-2.webp',
				url: '#'
			},
			{
				name: 'Гражданские дела',
				description: 'Представляем интересы в гражданских спорах. Защита прав потребителей, нарушение договора, сделки с недвижимостью',
				image: '/images/practices/practices-3.webp',
				url: '#'
			},
			{
				name: 'Консультации',
				description: 'Защита на всех стадиях уголовного процесса. От консультации до представления интересов в суде.',
				image: '/images/practices/practices-4.webp',
				url: '#'
			}
		]
	}

	return (
		<section id="practices" className="practices">
			<div className="practices_inner">
				<PracticesList items={items} />
			</div>
		</section>
	);
}

export default Practices;