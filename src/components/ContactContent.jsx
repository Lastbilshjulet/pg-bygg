function ContactContent() {
	return (
		<div className="p-6 mt-20 max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-4">
			<h2 className="text-2xl font-bold mb-4">Kontakta oss</h2>
			<p className="mb-4"><strong>Om oss:</strong> PG Bygg är ett familjeföretag som drivs av far och son. Vi har över 30 års erfarenhet inom byggbranschen och strävar alltid efter att leverera högsta kvalitet till våra kunder.</p>
			<div className="border-t border-gray-300 my-4"></div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div>
					<p className="mb-2"><strong>Företagsnamn:</strong> PG Bygg</p>
					<p className="mb-2"><strong>Adress:</strong> Byggvägen 1, 123 45 Byggstad</p>
				</div>
				<div>
					<p className="mb-2"><strong>Telefon:</strong> 012-345 6789</p>
					<p className="mb-2"><strong>Email:</strong> info@pgbygg.se</p>
					<p className="mb-2"><strong>Öppettider:</strong> Mån-Fre 08:00 - 17:00</p>
				</div>
			</div>
		</div>
	);
}

export default ContactContent;
