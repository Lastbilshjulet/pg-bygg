import { Link } from "react-router-dom";
import { useState } from "react";
import Slideshow from "./SlideShow";

function HomeContent () {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const mailtoLink = `mailto:info@pgbygg.se?subject=Förfrågan från ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Namn: ${formData.name}\nEpost: ${formData.email}\n\nMeddelande:\n${formData.message}`)}`;
        
        window.location.href = mailtoLink;
        
        // Reset form
        setFormData({ name: "", email: "", message: "" });
    };
    return (
        <>
            <div className="bg-primary dark:bg-primary-dark">
                <Slideshow></Slideshow>
            </div>
            <div className="bg-primary dark:bg-primary-dark py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Om oss</h2>
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 space-y-4">
                        <p className="text-gray-700 dark:text-gray-300">
                            Vi är ett byggföretag med många års erfarenhet inom branschen. Vi erbjuder tjänster inom nybyggnation, renovering och tillbyggnad. Vårt mål är att alltid leverera högsta kvalitet och kundnöjdhet.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            Kontakta oss för mer information och en kostnadsfri offert.
                        </p>
                        <div className="mt-6">
                            <Link to="/kontakta-oss" className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                Kontakta oss
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-primary dark:bg-primary-dark py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Vårt Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Team Member 1 */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden text-center">
                            <img 
                                src="/gustaf.jpg" 
                                alt="Gustaf" 
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Gustaf</h3>
                                <p className="text-gray-600 dark:text-gray-400">+46 70 XXX XXXX</p>
                            </div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden text-center">
                            <img 
                                src="/pontus.jpg" 
                                alt="Pontus" 
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Pontus</h3>
                                <p className="text-gray-600 dark:text-gray-400">+46 70 XXX XXXX</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-primary dark:bg-primary-dark py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Kontakta oss via Email</h2>
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                                    Namn
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Ditt namn"
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Din email"
                                />
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                                    Meddelande
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Ditt meddelande"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Skicka Email
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeContent;
