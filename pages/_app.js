import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0";
import { NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </NextUIProvider>
  );
}

export default MyApp;
