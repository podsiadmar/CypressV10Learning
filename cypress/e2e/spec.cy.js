import DataRegistration from "../generators/registerDataGenerator"
import TopMenu from "../pageObjects/homePage/topMenu"
import RegistrationFormula from "../pageObjects/registerPage/registerFormula"


describe('Rejestracja nowego użytkownika', () => {
  
beforeEach(() =>{
  cy.visit("/")
  TopMenu.clickOnRegisterLink();
  RegistrationFormula.verifyHeaderText();
})

  it('Fill registration fomrula', () => {
    const data = DataRegistration.getRandom();
    RegistrationFormula.enterFirstName(data.firstName)
    RegistrationFormula.enterLastName(data.lastName)
    RegistrationFormula.enterEmail(data.email)
  })

  it('Fill registration fomrula without email', () => {
    const data = DataRegistration.getRandom();
    RegistrationFormula.enterFirstName(data.firstName)
    RegistrationFormula.enterLastName(data.lastName)
  })
}) 