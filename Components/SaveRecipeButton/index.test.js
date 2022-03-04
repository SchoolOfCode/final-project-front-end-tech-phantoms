import SaveRecipeButton from ".";
import { screen, render } from "../../test/test-utils";
import { Auth0Provider } from "@auth0/nextjs-auth0";

jest.mock("@auth0/nextjs-auth0", () => ({
  Auth0Provider: ({ children }) => "<div>{children}</div>",
}));

describe("Test of SaveRecipeButton", () => {
  test("Button is rendered", () => {
    render(<SaveRecipeButton />);
    const button = screen.getByRole("button");
    console.log(button);
  });
});
