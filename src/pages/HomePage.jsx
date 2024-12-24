import Header from "../components/Header";
import HomeContent from "../components/HomeContent";

function HomePage() {
	return (
		<div className="bg-primary dark:bg-primary-dark h-screen">
			<Header></Header>
			<HomeContent></HomeContent>
		</div>
	);
}

export default HomePage;
