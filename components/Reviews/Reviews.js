import "./Reviews.css";

import Title from "@/components/ui/Title/Title";
import ReviewsItems from "./ReviewsItems";

const Reviews = () => {

	const { header, items } = {
		header: {
			badge: 'Отзывы клиентов',
			title: 'Что говорят наши клиенты'
		},

		items: [
			{
				description: '«Андрей Валерьевич с самого начала подробно разобрал ситуацию и выстроил понятную стратегию защиты. Всегда был на связи, спокойно отвечал на вопросы и добился для меня максимально благоприятного результата.»',
				avatar: '/images/reviews/user-1.webp',
				name: 'Елена С.',
				offer: 'Уголовное дело'
			},
			{
				description: '«Обратилась за помощью в споре по договору. Андрей Валерьевич быстро разобрался в документах, объяснил все возможные варианты и помог защитить мои интересы. Большое спасибо за профессионализм и внимательное отношение.»',
				avatar: '/images/reviews/user-2.webp',
				name: 'Михаил К.',
				offer: 'Гражданское дело'
			},
			{
				description: '«Благодаря грамотной работе адвоката удалось решить имущественный спор в мою пользу. Всё было чётко, аргументированно и без лишних обещаний. Остался очень доволен результатом.»',
				avatar: '/images/reviews/user-3.webp',
				name: 'Марина В.',
				offer: 'Уголовное дело'
			},
			{
				description: '«Обратилась по вопросу раздела имущества после развода. Андрей Валерьевич подробно объяснил мои права, помог подготовить документы и сопровождал дело на всех этапах. Очень ценю спокойный и профессиональный подход.»',
				avatar: '/images/reviews/user-4.webp',
				name: 'Дмитрий П.',
				offer: 'Уголовное дело'
			}
		]
	}

	return (
		<section id="reviews" className="reviews">
			<div className="reviews__inner">
				<Title badge={header.badge} title={header.title} position="center" />
				<ReviewsItems items={items} />
			</div>
		</section>
	);
}

export default Reviews;