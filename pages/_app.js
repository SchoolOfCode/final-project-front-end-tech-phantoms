import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0";
import { NextUIProvider, createTheme } from "@nextui-org/react";

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    type: "ourColors",
    theme: {
      colors: {
        ourGrey: "#C4C4C4",
        ourGreen: "#5EDEA7",
        hoverGreen: "#7AF5C0",
      },
      space: {},
      fonts: {},
    },
  });
  return (
    <NextUIProvider theme={theme}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </NextUIProvider>
  );
}

export default MyApp;
