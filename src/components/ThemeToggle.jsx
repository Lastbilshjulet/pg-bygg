import { useState, useEffect } from "react";
import { MdLightMode } from "react-icons/md";

const ThemeToggle = ({ size }) => {
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
		<button
			onClick={toggleTheme}
			className="text-secondary dark:text-secondary-dark"
		>
			<MdLightMode size={size}/>
		</button>
	);
};

export default ThemeToggle;
