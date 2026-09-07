import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Practices from "@/components/Practices/Practices";
import Advantages from "@/components/Advantages/Advantages";
import About from "@/components/About/About";
import Steps from "@/components/Steps/Steps";
import Faq from "@/components/Faq/Faq";
import Reviews from "@/components/Reviews/Reviews";
import Articles from "@/components/Articles/Articles";
import Contacts from "@/components/Contacts/Contacts";
import Footer from "@/components/Footer/Footer";

const Home = () => {
	return (
		<main className="wrapper">
			<Header />
			<Hero />
			<Practices />
			<Advantages />
			<About />
			<Steps />
			<Faq />
			<Reviews />
			<Articles />
			<Contacts />
			<Footer />
		</main>
	);
}

export default Home;
