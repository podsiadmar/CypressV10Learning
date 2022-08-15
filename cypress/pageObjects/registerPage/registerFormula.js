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
//#endregion Objects    

//#region methods
    verifyHeaderText(){
        this.registerHeader, tresc =>{
            expect(tresc).to.equal("Register")
        }
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

//#endregion methods

}

export default new RegistrationFormula();