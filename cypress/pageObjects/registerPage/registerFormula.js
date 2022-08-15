class RegistrationFormula{

    get registerHeader(){
        return cy.get(".page-title h1");
    }

    verifyHeaderText(){
        this.registerHeader, tresc =>{
            expect(tresc).to.equal("Register")
        }
    }

}

export default new RegistrationFormula();