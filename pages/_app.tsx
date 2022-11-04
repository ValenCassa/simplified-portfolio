import "../styles/globals.css";
import type { AppProps } from "next/app";
import DockComponent from "components/Dock";
import { ThemeProvider } from "next-themes";
import Layout from "components/Layout";
import UpperBlur from "components/@/UpperBlur";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import ClockComponent from "components/IndexPage/@/Clock";
import MobileMenu from "components/MobileMenu";

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <ThemeProvider defaultTheme="light">
      <UpperBlur />
      <MobileMenu />
      <ClockComponent />
      <Layout>
        <AnimatePresence initial mode="wait">
          <Component {...pageProps} key={pathname} />
        </AnimatePresence>
      </Layout>
      <DockComponent />
      <div id="dock-portal" />
    </ThemeProvider>
  );
}
