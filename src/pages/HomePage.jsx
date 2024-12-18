import Header from "../components/Header";

function HomePage() {
	return (
		<div className="bg-primary dark:bg-primary-dark h-screen">
			<Header></Header>
			<p className="text-secondary dark:text-secondary-dark pt-1 text-center">
                Hej!
			</p>
		</div>
	);
}

export default HomePage;
