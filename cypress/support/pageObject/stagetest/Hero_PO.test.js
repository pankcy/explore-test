/* 
    1. verify the homepage 
    2. verify the image link 
    3. verify random text before get started button 
    3. verify get started button 
*/

class Hero_PO {
	verifyHomePage() {
		cy.get("section").should("have.class", "hero").as("heroSection");
	}

	verifyImageLink() {
		cy.get(
			'section > a[href="https://nirmata.com"] > img[alt="banner image"]'
		).should("exist");
	}

	verifyRandomText() {
		cy.get("#about-section").should("contain", "ajhsdkjahsdas");
	}

	verifyGetStartedButton() {
		// verify link
		cy.get("#about-section  a[href='/all_courses'] ").should("exist");
		// verify text of button
		cy.get("#about-section  button ").should("contain", "Get Started");
	}
}

export default Hero_PO;
