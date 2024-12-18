import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Header() {
	return (
		<nav className="w-full flex flex-row justify-between p-10 border-b border-b-secondary dark:border-b-secondary-dark shadow-md shadow-black dark:shadow-white">
			<div className="m-auto">
				<Link to={"/"}>
					<h1 className="text-5xl w-full text-secondary dark:text-secondary-dark">P&G Bygg</h1>
				</Link>
			</div>
			<div className="fixed top-14 right-10 flex gap-10">
				<div className="text-secondary dark:text-secondary-dark pt-1">
					<Link to={"/kontakta-oss"}>
                    Kontakta oss
					</Link>
				</div>
				<ThemeToggle />
			</div>
		</nav>
	);
}

export default Header;
