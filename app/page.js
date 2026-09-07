import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Practices from "@/components/Practices/Practices";
import Advantages from "@/components/Advantages/Advantages";
import About from "@/components/About/About";
import Steps from "@/components/Steps/Steps";
import Reviews from "@/components/Reviews/Reviews";

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
		</main>
	);
}

export default Home;
