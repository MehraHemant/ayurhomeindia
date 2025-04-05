export function Footer() {
    return (
        <footer className="bg-gray-700 font-poppins text-white py-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
                <div className="flex flex-col items-start">
                    <h3 className="text-xl font-semibold mb-2">About Us</h3>
                    <p className="text-sm text-gray-300">
                        We are dedicated to providing the best Ayurvedic treatments and therapies for your well-being.
                    </p>
                </div>
                <div className="flex flex-col items-start">
                    <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
                    <ul className="text-sm text-gray-300 space-y-1">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">Services</a></li>
                        <li><a href="#" className="hover:underline">Contact Us</a></li>
                    </ul>
                </div>
                <div className="flex flex-col items-start">
                    <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                    <p className="text-sm text-gray-300">123 Ayurvedic St, Wellness City, AY 12345</p>
                    <p className="text-sm text-gray-300">Phone: (123) 456-7890</p>
                </div>
            </div>
        </footer>
    );
}