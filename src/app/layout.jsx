import Navbar from "./components/Navbar.jsx";
import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="select-none">
                <Navbar />
                {children}</body>
        </html>
    );
}
