// import "../styles/_app.css";
import { AppProps } from "next/app";
import { GlobalStyle } from "../components/global/styles/GlobalStyle";
import { PrimaryContainer } from "../components/global/styles/Containers";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <PrimaryContainer>
        <Component {...pageProps} key={router.route} />
      </PrimaryContainer>
    </>
  );
}

export default MyApp;
