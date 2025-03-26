import { Header, NavigationBar } from "@/components";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-gray-500">
        <Header />
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
