import {
	createBrowserRouter,
	RouterProvider
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import firebase from "./firebase";

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
