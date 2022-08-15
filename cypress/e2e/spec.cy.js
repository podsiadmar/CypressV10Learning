import TopMenu from "../pageObjects/homePage/topMenu"
import RegistrationFormula from "../pageObjects/registerPage/registerFormula"

describe('Rejestracja nowego użytkownika', () => {
  
beforeEach(() =>{
  cy.visit("/")
  TopMenu.clickOnRegisterLink();
  RegistrationFormula.verifyHeaderText();
})

  it('Fill registration fomrula', () => {

  })
}) 