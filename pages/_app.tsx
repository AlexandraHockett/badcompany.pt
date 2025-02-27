import "../styles/globals.css"; // Add this line at the top
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import Footerbc from "@/components/Footerbc";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footerbc />
    </div>
  );
}

export default MyApp;
