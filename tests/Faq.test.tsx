import { render, screen, fireEvent } from "@testing-library/react";
import FAQ from "../src/app/components/Faq";
jest.mock("next/font/google", () => ({
  Roboto_Slab: () => ({ className: "mock-roboto-slab" }),
}));


describe("FAQ Component", () => {
  it("renders FAQ heading", () => {
    render(<FAQ />);
    expect(screen.getByRole("heading", { name: /❓ FAQ - Taxi Bram’s/i })).toBeInTheDocument();
  });

  it("renders all questions", () => {
    render(<FAQ />);

    const questions = [
      "Quels types de trajets propose Taxi Bram’s ?",
      "Comment réserver un taxi ?",
      "Est-ce que vous êtes disponibles 24h/24 ?",
      "Proposez-vous un taxi conventionné CPAM ?",
    ];

    questions.forEach(q => {
      expect(screen.getByRole("button", { name: new RegExp(q, "i") })).toBeInTheDocument();
    });
  });

  it("expands and shows answer when a question is clicked", () => {
    render(<FAQ />);

    const faqData = [
      {
        question: "Quels types de trajets propose Taxi Bram’s ?",
        answer: "Transferts aéroports, gares, trajets toutes distances, services personnalisés."
      },
      {
        question: "Comment réserver un taxi ?",
        answer: "Vous pouvez appeler directement Taxi Bram’s au 06 69 53 24 86 ou réserver via WhatsApp."
      },
      {
        question: "Est-ce que vous êtes disponibles 24h/24 ?",
        answer: "Oui, service disponible 24h/24 et 7j/7."
      },
      {
        question: "Proposez-vous un taxi conventionné CPAM ?",
        answer: "Oui, pour vos rendez-vous médicaux."
      }
    ];

    faqData.forEach(({ question, answer }, index) => {
        const button = screen.getByText(question).closest("button")!;
        const content = screen.getByText(answer);
      
        // Initialement fermé : on vérifie la classe
        expect(content.parentElement).toHaveClass("max-h-0");
      
        // Clique pour ouvrir
        fireEvent.click(button);
      
        // Après le clic : on vérifie la classe qui montre le contenu
        expect(content.parentElement).toHaveClass("max-h-40");
      });
      


  });
});