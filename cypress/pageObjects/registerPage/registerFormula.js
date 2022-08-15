
class RegistrationFormula{
    
//#region Objects
    get registerHeader(){
        return cy.get(".page-title h1");
    }

    get firstaNameInput(){
        return cy.get("#FirstName");
    }

    get lastaNameInput(){
        return cy.get("#LastName");
    }

    get emailInput(){
        return cy.get("#Email")
    }

    get passwordIntput(){
        return cy.get("#Password")
    }

    get confirmPasswordInput(){
        return cy.get("#ConfirmPassword")
    }

    get registerButton(){
        return cy.get("#register-button")
    }

    get validationError(){
        return cy.get(".field-validation-error")
    }
//#endregion Objects    

//#region methods
    verifyHeaderText(){
        this.registerHeader.should("have.text", "Register");
        
    }

    verifyErrorText(errorText){
        this.validationError.should("have.text", errorText);
    }

    enterFirstName(name){
        this.firstaNameInput.type(name)
    }

    enterLastName(lastName){
        this.lastaNameInput.type(lastName)
    }

    enterEmail(email){
        this.emailInput.type(email)
    }

    enterPassword(password){
        this.passwordIntput.type(password)
    }

    enterConfirmPassword(password){
        this.confirmPasswordInput.type(password)
    }

    pressRegisterButton(){
        this.registerButton.click();
    }

//#endregion methods

}

export default new RegistrationFormula();