import Nav from "@/components/custom/nav";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="scroll-smooth">
        <Nav />
        {children}
      </body>
    </html>
  );
}
