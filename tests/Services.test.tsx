import { render, screen } from "@testing-library/react";
import Services from "../src/app/components/Services";
jest.mock("next/font/google", () => ({
  Roboto_Slab: () => ({ className: "mock-roboto-slab" }),
}));


describe("Services Component", () => {
  it("renders Services section with correct heading and service titles", () => {
    render(<Services />);

    // Vérifie le titre principal
    expect(screen.getByRole("heading", { name: /Nos services/i })).toBeInTheDocument();

    // Vérifie que tous les titres de services sont rendus
    const serviceTitles = [
      "Taxi conventionné CPAM",
      "Transferts aéroports",
      "Transferts gares",
      "Toutes distances",
      "Disponibilité 24/7",
      "Sécurité & confort",
    ];

    serviceTitles.forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it("renders descriptions for each service", () => {
    render(<Services />);

    const serviceDescs = [
      "Trajets médicaux assis pris en charge par l’Assurance Maladie.",
      "Déplacements vers Roissy-CDG, Orly et Beauvais avec ponctualité.",
      "Liaisons vers les gares parisiennes : Gare du Nord, Gare de l’Est, etc.",
      "Service disponible en Tremblay-en-France, Île-de-France.",
      "Taxi toujours prêt, de jour comme de nuit, sur réservation.",
      "Chauffeur professionnel, tarifs réglementés et conduite sécurisée.",
    ];

    serviceDescs.forEach(desc => {
      expect(screen.getByText(desc)).toBeInTheDocument();
    });
  });
});
