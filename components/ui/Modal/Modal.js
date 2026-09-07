import "./Modal.css";

import { XMarkIcon } from '@heroicons/react/24/outline';

const Modal = ({ isOpen, onClose, service }) => {

	if (!isOpen) {
		return null;
	}

	return (
		<div className="modal">
			<button type="button" className="modal__overlay" onClick={onClose} />

			<div className="modal__inner">
				<button type="button" className="modal__close" onClick={onClose} aria-label="Закрыть">
					<XMarkIcon className="modal__icon" />
				</button>

				<div className="modal__header">
					<span className="section__badge">
						Оставить заявку
					</span>

					<h2 className="modal__title">
						{service || 'Получить консультацию'}
					</h2>

					<p className="modal__description">
						Оставьте свои контакты, и мы свяжемся с вами
						для уточнения деталей.
					</p>
				</div>

				<form className="modal__form">
					<div className="modal__field">
						<label htmlFor="modal-name" className="modal__label" >
							Ваше имя
						</label>
						<input id="modal-name" type="text" name="name" placeholder="Введите имя" className="modal__input" />
					</div>

					<div className="modal__field">
						<label htmlFor="modal-phone" className="modal__label" >
							Телефон
						</label>
						<input id="modal-phone" type="tel" name="phone" placeholder="+7 (___) ___-__-__" className="modal__input" />
					</div>

					<button className="modal__button modal__button--primary">Отправить</button>
				</form>

				<p className="modal__privacy">
					Нажимая на кнопку, вы соглашаетесь с обработкой персональных данных.
				</p>
			</div>
		</div>
	);
}

export default Modal;