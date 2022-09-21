import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
/**
 * @return {JSX.Element}
 */
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
