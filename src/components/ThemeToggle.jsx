import { useState, useEffect } from "react";
import { MdLightMode } from "react-icons/md";

const ThemeToggle = () => {
	const [theme, setTheme] = useState(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			return savedTheme;
		}
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		return prefersDark ? "dark" : "light";
	});

	useEffect(() => {
		const root = document.documentElement;
		if (theme === "dark") {
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
		}
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
	};

	return (
		<div className="fixed top-14 right-10">
			<button
				onClick={toggleTheme}
				className="text-secondary dark:text-secondary-dark"
			>
				<MdLightMode size={35}/>
			</button>
		</div>
	);
};

export default ThemeToggle;
