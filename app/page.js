import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Practices from "@/components/Practices/Practices";
import Advantages from "@/components/Advantages/Advantages";

const Home = () => {
	return (
		<main className="wrapper">
			<Header />
			<Hero />
			<Practices />
			<Advantages />
		</main>
	);
}

export default Home;
