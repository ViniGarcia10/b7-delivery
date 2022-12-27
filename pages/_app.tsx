import type { AppProps } from "next/app";
import { Provider as AppContextProvider } from "../context/app";
import { Provider as AuthContextProvider } from "../context/auth";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </AuthContextProvider>
  );
}
