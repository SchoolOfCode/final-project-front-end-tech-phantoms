import SearchBar from "./";
import { render, screen } from "../../test/test-utils";

describe("test of checking that the button renders", () => {
  test("renders button", () => {
    render(<SearchBar />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
