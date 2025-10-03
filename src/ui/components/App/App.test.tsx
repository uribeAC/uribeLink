import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given the App component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Alex Uribe' inside a heading level 1", () => {
      const title = /alex uribe/i;

      render(<App />);

      const cardTitle = screen.getByRole("heading", { name: title, level: 1 });

      expect(cardTitle).toBeInTheDocument();
    });
  });
});
