/// <reference types="cypress" />

import DataRegistration from "../generators/registerDataGenerator"
import TopMenu from "../pageObjects/homePage/topMenu"
import RegistrationFormula from "../pageObjects/registerPage/registerFormula"


describe('Rejestracja nowego użytkownika', () => {
  let data = DataRegistration.getRandom();

  beforeEach(() =>{
    cy.visit("/")
    TopMenu.clickOnRegisterLink();
    RegistrationFormula.verifyHeaderText();
  });

  it('Bez podania hasła', () => {
    RegistrationFormula.enterFirstName(data.firstName)
    RegistrationFormula.enterLastName(data.lastName)
    RegistrationFormula.enterEmail(data.email)
    RegistrationFormula.enterPassword(data.password)
    RegistrationFormula.enterConfirmPassword("password123")
    RegistrationFormula.pressRegisterButton();
    RegistrationFormula.verifyErrorText("The password and confirmation password do not match.")
  });

  it('Bez potwierdzenia hasła', () => {
    RegistrationFormula.enterFirstName(data.firstName)
    RegistrationFormula.enterLastName(data.lastName)
    RegistrationFormula.enterEmail(data.email)
    RegistrationFormula.enterPassword(data.password)
    RegistrationFormula.pressRegisterButton();
    RegistrationFormula.verifyErrorText("Password is required.")
  });

  it('Bez podania pierwszego imienia', () => {
    RegistrationFormula.enterLastName(data.lastName)
    RegistrationFormula.enterEmail(data.email)
    RegistrationFormula.enterPassword(data.password)
    RegistrationFormula.enterConfirmPassword(data.password)
    RegistrationFormula.pressRegisterButton();
    RegistrationFormula.verifyErrorText("First name is required.")
  });

  it('Bez podania nazwiska', () => {
    const data = DataRegistration.getRandom();
    RegistrationFormula.enterFirstName(data.firstName)
    RegistrationFormula.enterEmail(data.email)
    RegistrationFormula.enterPassword(data.password)
    RegistrationFormula.enterConfirmPassword(data.password)
    RegistrationFormula.pressRegisterButton();
    RegistrationFormula.verifyErrorText("Last name is required.")
  });

  it('Bez podania emaila', () => {
    const data = DataRegistration.getRandom();
    RegistrationFormula.enterFirstName(data.firstName)
    RegistrationFormula.enterLastName(data.lastName)
    RegistrationFormula.enterPassword(data.password)
    RegistrationFormula.enterConfirmPassword(data.password)
    RegistrationFormula.pressRegisterButton();
    RegistrationFormula.verifyErrorText("Email is required.")
  });

}) 