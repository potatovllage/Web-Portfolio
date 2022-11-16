import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import global from "../styles/global";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Global styles={global} />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
