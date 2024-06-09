import "./globals.css";
import Navbar from "./_Components/Navbar";
import Footer from "./_Components/Footer";
import StoreProvider from "./_Redux/StoreProvider";

export const metadata = {
  title: "Asr Travel",
  description:
    "ابحثوا عن رحلات مع طيران الإمارات واحجزوا عبر الإنترنت. اطلعوا على مسارات رحلاتنا وجداولها واكتشفوا المزيد حول تجربة السفر التي ستكون في انتظاركم.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider>
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </StoreProvider>
    </html>
  );
}
