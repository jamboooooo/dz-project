describe("Avatar List test", () => {
  it("shoud delete item", () => {
    cy.visit("/");
    cy.get("tr button").should("have.length", 4);
    cy.get("tr button").last().click();
    cy.get("tr button").should("have.length", 3);
  });
});
