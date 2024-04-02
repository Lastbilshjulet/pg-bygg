import {
	createBrowserRouter,
	RouterProvider
} from "react-router-dom";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <HomePage />
		},
		{
			path: "/home",
			element: <HomePage />
		}
	]
);

function App() {
	return (
		<RouterProvider router={router} />
	);
}

export default App;
