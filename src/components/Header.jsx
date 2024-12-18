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
			<ThemeToggle />
		</nav>
	);
}

export default Header;
