import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DCA Moving | Toronto's Top Rated Moving Company",
  description: "Moving done right the first time, for a stress-free, zero-damage experience. Your trusted moving partner in Vaughan and Toronto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container header-container">
            <div className="logo">
              DCA<span>Moving</span>
            </div>
            <nav>
              <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#why-us">Why Us</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
