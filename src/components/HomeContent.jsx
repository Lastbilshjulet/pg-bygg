import { Link } from "react-router-dom";

function HomeContent () {
	return (
		<div className="p-6 mt-20 max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-4">
			<h1 className="text-3xl font-bold text-gray-900">Välkommen till PG Bygg</h1>
			<p className="text-gray-700">
                Vi är ett byggföretag med många års erfarenhet inom branschen. Vi erbjuder tjänster inom nybyggnation, renovering och tillbyggnad. Vårt mål är att alltid leverera högsta kvalitet och kundnöjdhet.
			</p>
			<p className="text-gray-700">
                Kontakta oss för mer information och en kostnadsfri offert.
			</p>
			<div className="mt-4">
				<Link to="/kontakta-oss" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                    Kontakta oss
				</Link>
			</div>
		</div>
	);
}

export default HomeContent;
