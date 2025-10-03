import { render, screen } from "@testing-library/react";
import LinksCard from "./LinksCard";

describe("Given the LinksCard component", () => {
  describe("When it renders", () => {
    test("Then it should show a profile photography of Alex Uribe", () => {
      const imageAlternativeText = /alex uribe profile photography/i;

      render(<LinksCard />);

      const profileImage = screen.getByAltText(imageAlternativeText);

      expect(profileImage).toBeInTheDocument();
    });

    test("Then it should show 'Alex Uribe' inside a heading level 1", () => {
      const title = /alex uribe/i;

      render(<LinksCard />);

      const cardTitle = screen.getByRole("heading", { name: title, level: 1 });

      expect(cardTitle).toBeInTheDocument();
    });

    test("Then it should show a 'Check my CV' link", () => {
      const linkText = /check my cv/i;

      render(<LinksCard />);

      const curriculumLink = screen.getByRole("link", { name: linkText });

      expect(curriculumLink).toBeInTheDocument();
    });
  });
});
