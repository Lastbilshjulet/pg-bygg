import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

function Header() {
	const [menu, setMenu] = useState(false);

	return (
		<div className="relative">
			<nav
				className="w-full flex items-center md:justify-end bg-primary dark:bg-primary-dark
                border-b border-b-secondary dark:border-b-secondary-dark
                shadow-md shadow-black dark:shadow-white relative z-50"
			>
				<div className="hamburger-menu space-y-2 p-5 sm:p-10 md:hidden cursor-pointer" onClick={() => setMenu(!menu)}>
					<div className="w-8 h-0.5 bg-secondary dark:bg-secondary-dark"></div>
					<div className="w-8 h-0.5 bg-secondary dark:bg-secondary-dark"></div>
					<div className="w-8 h-0.5 bg-secondary dark:bg-secondary-dark"></div>
				</div>
				<div className="title absolute left-1/2 transform -translate-x-1/2">
					<Link to={"/"}>
						<h1 className="text-2xl md:text-4xl w-full text-secondary dark:text-secondary-dark">P&G Bygg</h1>
					</Link>
				</div>
				<div className="hidden md:flex flex-row-reverse items-center">
					<div className="p-10 pl-5">
					    <ThemeToggle size="35" />
					</div>
					<div className="text-nowrap text-secondary dark:text-secondary-dark">
						<Link to={"/kontakta-oss"} className="p-10 pr-5">
                            Kontakta oss
						</Link>
					</div>
				</div>
			</nav>
			<>
				<div
					className={`md:hidden fixed mt-28 inset-0 bg-black z-10 
                        transition-[opacity] duration-300 
                        ${menu ? "opacity-50" : "opacity-0"}`}
					onClick={() => setMenu(false)}
				></div>
				<div
					className={`md:hidden menu absolute left-0 right-0 bg-primary dark:bg-primary-dark
                        shadow-md shadow-black dark:shadow-white z-20 transition-[top] duration-300
                        overflow-hidden ${menu ? "top-16 sm:top-28" : "top-[-200px]"}`}
				>
					<ul className="flex flex-col">
						<li>
							<Link
								to={"/"}
								className="block w-full p-4 text-secondary dark:text-secondary-dark"
								onClick={() => setMenu(false)}>
                                Startsida
							</Link>
						</li>
						<li>
							<Link
								to={"/kontakta-oss"}
								className="block w-full p-4 text-secondary dark:text-secondary-dark"
								onClick={() => setMenu(false)}>
                                Kontakta oss
							</Link>
						</li>
						<li>
							<div className="block w-full p-4 text-secondary dark:text-secondary-dark">
								<ThemeToggle size="25"/>
							</div>
						</li>
					</ul>
				</div>
			</>
		</div>
	);
}

export default Header;
