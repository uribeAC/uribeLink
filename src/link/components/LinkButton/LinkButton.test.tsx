import { render, screen } from "@testing-library/react";
import LinkButton from "./LinkButton";
import { followMeLink } from "../../fixtures/fixtures";

describe("Given the LinkButton component", () => {
  describe("When it receives 'Follow me' as a text with an icon and a link", () => {
    test("Then it should show a 'Follow me' link", () => {
      const linkText = /follow me/i;

      render(<LinkButton linkInfo={followMeLink} />);

      const followLink = screen.getByRole("link", { name: linkText });

      expect(followLink).toBeInTheDocument();
    });
  });
});
