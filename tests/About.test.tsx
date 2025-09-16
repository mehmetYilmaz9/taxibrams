// tests/About.test.tsx
import { render, screen } from "@testing-library/react";
import About from "../src/app/components/About";

// Mock pour next/font/google
jest.mock("next/font/google", () => ({
  Roboto_Slab: () => ({ className: "mock-roboto-slab" }),
}));

describe("About Component", () => {
  it("renders About section with correct heading and text", () => {
    render(<About />);

    // Vérifie le titre
    expect(screen.getByRole("heading", { name: /À propos de Taxi Bram’s/i })).toBeInTheDocument();

    // Vérifie le texte
    expect(
      screen.getByText(/Taxi Bram’s est votre service de taxi professionnel/i)
    ).toBeInTheDocument();
  });
});
