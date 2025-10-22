import { render, screen } from "@testing-library/react";
import {
  instagramLink,
  twitterLink,
  youtubeLink,
} from "../../fixtures/fixtures";
import LinksHolder from "./LinksHolder";

describe("Given the LinksHolder component", () => {
  describe("When it receives Instagram, Twitter and Youtube links", () => {
    test("Then it should show a 'Instagram' link", () => {
      const linkText = /instagram/i;

      render(
        <LinksHolder
          firstLink={instagramLink}
          secondLink={youtubeLink}
          thirdLink={twitterLink}
        />,
      );

      const instagram = screen.getByRole("link", { name: linkText });

      expect(instagram).toBeInTheDocument();
    });
  });
});
