import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0";
import { NextUIProvider, createTheme} from "@nextui-org/react";

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    theme: {
      colors: {
        // brand colors
        primaryLight: "$green200",
        primary: "#4ADE7B",
        primaryDark: "$green600",

        gradient:
          "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
        link: "#5E1DAD",

        // you can also create your own color
        ourGrey: "#C4C4C4",

        // ...  more colors
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
