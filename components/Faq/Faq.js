"use client";

import "./Faq.css";

import { useState } from "react";
import Title from "@/components/ui/Title/Title";

const Faq = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleToggle = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	const faqItems = [
		{
			question: "Сколько стоит консультация?",
			answer:
				"Стоимость консультации зависит от сложности вопроса и объёма работы. После изучения вашей ситуации я смогу точно сориентировать вас по стоимости.",
		},
		{
			question: "Какие документы нужны для консультации?",
			answer:
				"На первом этапе достаточно кратко описать вашу ситуацию. Если понадобятся дополнительные документы, я сообщу, что необходимо подготовить.",
		},
		{
			question: "Сколько времени занимает рассмотрение дела?",
			answer:
				"Срок зависит от категории и сложности дела. На консультации мы определим основные этапы работы и примерные сроки решения вашего вопроса.",
		},
		{
			question: "Возможно ли дистанционное ведение дела?",
			answer:
				"Да. Консультации, подготовку документов и многие другие юридические действия можно проводить дистанционно.",
		},
		{
			question: "Гарантируете ли вы выигрыш дела?",
			answer:
				"Ни один юрист не может гарантировать конкретное решение суда. Я оцениваю перспективы дела, возможные риски и выбираю наиболее эффективную стратегию защиты.",
		},
	];

	return (
		<section id="faq" className="faq">
			<div className="faq__inner">
				<div className="faq__left">
					<Title badge="FAQ" title="Часто задоваемые вопросы" position="left" />
					<div className="faq__list">
						{faqItems.map((item, index) => {
							const isActive = activeIndex === index;

							return (
								<div className={`faq__item ${isActive ? "faq__item--active" : ""}`} key={item.question}>
									<button type="button" className="faq__question" onClick={() => handleToggle(index)} aria-expanded={isActive}>
										<span>{item.question}</span>

										<span className="faq__icon">
											{isActive ? "−" : "+"}
										</span>
									</button>

									<div className={`faq__answer ${isActive ? "faq__answer--active" : ""}`} >
										<p>{item.answer}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div className="faq__right" style={{ backgroundImage: `linear-gradient(to left, transparent 10%, rgba(0,0,0,1) 100%), url("/images/faq/faq-1.webp")` }}>
					<div className="faq__right-title">Остались вопросы?</div>
					<div className="faq__right-description">Задайте свой вопрос прямо сейчас и получите ответ в ближайшее время.</div>
					<button className="faq__button">Задать вопрос</button>
				</div>
			</div>
		</section>
	);
}

export default Faq;