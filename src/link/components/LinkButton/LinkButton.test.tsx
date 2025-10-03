import { render, screen } from "@testing-library/react";
import LinkButton from "./LinkButton";

describe("Given the LinkButton component", () => {
  describe("When it receives 'Follow me' as a text with an icon and a link", () => {
    test("Then it should show a 'Follow me' link", () => {
      const linkText = /follow me/i;

      render(
        <LinkButton text="Follow me" iconUrl="" link="https://test.com" />,
      );

      const followLink = screen.getByRole("link", { name: linkText });

      expect(followLink).toBeInTheDocument();
    });
  });
});
