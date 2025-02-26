import "../styles/globals.css"; // Add this line at the top
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
