import {
	createBrowserRouter,
	RouterProvider
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <HomePage />
		},
		{
			path: "/kontakta-oss",
			element: <ContactPage />
		}
	]
);

function App() {
	return (
		<RouterProvider router={router} />
	);
}

export default App;
