import "./globals.css";

export const metadata = {
	title: "Luter & Co - Лютер Андрей Валерьевич",
	description: "Опытный адвокат с индивидуальным подходом к каждому делу. Защищаю ваши интересы в сложных ситуациях.",
};

const RootLayout = ({ children }) => {
	return (
		<html lang="ru">
			<body>{children}</body>
		</html>
	);
}

export default RootLayout;