import { render, screen } from "@testing-library/react";
import LinkProfile from "./LinkProfile";
import { saraRevert } from "../../fixtures/fixtures";

describe("Given the LinkProfile component", () => {
  describe("When it receives Sara Revert profile", () => {
    test("Then it should show a profile photography of Sara Revert", () => {
      const imageAlternativeText = /sara revert profile photography/i;

      render(<LinkProfile profile={saraRevert} />);

      const profileImage = screen.getByAltText(imageAlternativeText);

      expect(profileImage).toBeInTheDocument();
    });

    test("Then it should show 'Sara Revert' inside a heading level 1", () => {
      const title = /sara revert/i;

      render(<LinkProfile profile={saraRevert} />);

      const cardTitle = screen.getByRole("heading", { name: title, level: 1 });

      expect(cardTitle).toBeInTheDocument();
    });
  });
});
