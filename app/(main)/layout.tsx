import Footer from "@/components/Footer";
import Header from "@/components/header";
import "swiper/css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="max-w-7xl lg:mx-auto p-5 md:px-10 w-full min-h-screen">
        {children}
      </main>

      <Footer />
    </div>
  );
}
