"use client";

import "./Header.css";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { Menu, X } from "lucide-react";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const { header, menu, contacts, button } = {
		header: {
			logo: '/images/logo.svg',
		},

		menu: [
			{
				name: 'Практики',
				url: '#practices'
			},
			{
				name: 'Преимущества',
				url: '#advantages'
			},
			{
				name: 'Обо мне',
				url: '#about'
			},
			{
				name: 'Процесс',
				url: '#steps'
			},
			{
				name: 'Отзывы',
				url: '#reviews'
			},
			{
				name: 'Контакты',
				url: '#contacts'
			}
		],

		contacts: {
			phone: '+7 (927) 260-60-06',
			time: 'с 8:00 до 21:00'
		},

		button: {
			name: 'Позвонить'
		}
	}

	return (
		<section className="header">
			<div className="header__inner">
				<Image className="header__logo" src={header.logo} width={180} height={50} alt="Logo" />
				<nav className={`header__nav ${isOpen ? "header__nav--open" : ""}`}>
					{menu?.map(({ name, url }, id) => (
						<Link key={id} className="header__link" href={url} onClick={() => setIsOpen(false)}>
							{name}
						</Link>
					))}
				</nav>
				<div className="header__contacts">
					<div className="header__contact">
						<span className="header__phone">
							{contacts.phone}
						</span>

						<span className="header__time">
							{contacts.time}
						</span>
					</div>

					<button className="header__button">
						<PhoneIcon className="size-3" />
						{button.name}
					</button>
				</div>
				<button className="header__burger" onClick={() => setIsOpen(!isOpen)} aria-label="Открыть меню">
					{isOpen ? (
						<X className="size-6" />
					) : (
						<Menu className="size-6" />
					)}
				</button>
			</div>
		</section>
	);
}

export default Header;