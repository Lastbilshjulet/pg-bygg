import Header from "../components/Header";
import ContactContent from "../components/ContactContent";

function ContactPage() {
	return (
		<div className="bg-primary dark:bg-primary-dark h-screen">
			<Header></Header>
			<ContactContent></ContactContent>
		</div>
	);
}

export default ContactPage;
