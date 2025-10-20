import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Given the Layout component", () => {
  describe("When it renders", () => {
    test("Then it should show a 'Beyond the screen' link", () => {
      const linkText = /beyond the screen/i;

      render(<Layout />);

      const goodreadsLink = screen.getByRole("link", { name: linkText });

      expect(goodreadsLink).toBeInTheDocument();
    });
  });
});
