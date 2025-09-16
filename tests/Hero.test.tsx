// tests/Hero.test.tsx
import { render, screen } from "@testing-library/react";
import Hero from "../src/app/components/Hero";

// Mock pour next/font/google
jest.mock("next/font/google", () => ({
  Roboto_Slab: () => ({ className: "mock-roboto-slab" }),
}));

describe("Hero component", () => {
  const props = {
    title: "Taxi Bram’s",
    subtitle: "Votre service de taxi à Tremblay-en-France et en Seine-Saint-Denis",
    callLabel: "📞 Appeler maintenant",
    callLink: "tel:+33786343702",
    ctaLabel: "🗓️ Réserver un trajet",
    ctaLink: "https://wa.me/33786343702",
  };

  it("renders title and subtitle", () => {
    render(<Hero {...props} />);
    
    // Vérifie le titre
    expect(screen.getByRole("heading", { name: /Taxi Bram’s/i })).toBeInTheDocument();
    
    // Vérifie le sous-titre
    expect(screen.getByText(/Votre service de taxi à Tremblay-en-France/i)).toBeInTheDocument();
  });

  it("renders call and cta buttons with correct labels and links", () => {
    render(<Hero {...props} />);
    
    // Bouton Appeler
    const callButton = screen.getByRole("link", { name: props.callLabel });
    expect(callButton).toBeInTheDocument();
    expect(callButton).toHaveAttribute("href", props.callLink);

    // Bouton Réserver
    const ctaButton = screen.getByRole("link", { name: props.ctaLabel });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute("href", props.ctaLink);
  });

  it("does not render subtitle if not provided", () => {
    render(<Hero {...props} subtitle={undefined} />);
    expect(screen.queryByText(/Votre service de taxi/i)).toBeNull();
  });
});
