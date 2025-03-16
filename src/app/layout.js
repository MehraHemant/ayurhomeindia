import { Header, NavigationBar } from "@/components";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
