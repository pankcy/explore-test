/// <reference types="cypress" />

import Navigation_PO from "../../support/pageObject/stagetest/Navigation_PO.test";
import Hero_PO from "../../support/pageObject/stagetest/Hero_PO.test";
import Client_PO from "../../support/pageObject/stagetest/Clients_PO.test";
import Courses_PO from "../../support/pageObject/stagetest/Courses_PO.test";

describe("Testing explore page on stage", () => {
	const navigation_PO = new Navigation_PO();
	const hero_PO = new Hero_PO();
	const client_PO = new Client_PO();
	const courses_PO = new Courses_PO();

	beforeEach(() => {
		cy.visit("/");
	});

	it("testing navigation bar ", () => {
		// navigation_PO.verifyNavbar();
		navigation_PO.verifyLogo();
		navigation_PO.verifyLinks();
	});

	it("testing hero section ", () => {
		hero_PO.verifyHomePage();
		hero_PO.verifyImageLink();
		hero_PO.verifyRandomText();
		hero_PO.verifyGetStartedButton();
	});

	it("testing client section ", () => {
		client_PO.verifyClientTexts();
		client_PO.verifyCustomers();
	});

	it("testing courses section ", () => {
		courses_PO.verifyCoursesHeader();
		courses_PO.verifyCoursesTitleAndDescription();
		courses_PO.verifyQuiz();
	});

	it.only("testing course trainer section ", () => {
		/* 
			1. verify header, name, photo and bio 
		
		*/

		cy.get(".container h2").should("contain", "Course Trainers");
		// img h2 p
	});

	// it.only("testing client section ", () => {
	// });
});
