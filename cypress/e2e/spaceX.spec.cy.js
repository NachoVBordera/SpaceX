describe("SpaceX managment", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });
  it("Home page", () => {
    cy.get(".upcomingLaunchArticle").should("exist");
    cy.get(".upcomingLaunchArticle").should("exist");
    cy.get(".historyListContainer").should("exist");
    cy.get(".entriesList").children().should("have.length", 15);
  });
  it("Should load 20 more missions", () => {
    cy.get('[href="/launches"]').click();
    cy.get(".launchArticle").children().should("have.length", 20);
    cy.get("button").click();
    cy.get(".launchArticle").children().should("have.length", 40);
  });
});
