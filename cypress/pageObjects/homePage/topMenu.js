class TopMenu{

    get registerLink(){
        return cy.get("a[href='/register']");
    }

    clickOnRegisterLink(){
        this.registerLink.click();
    }

}

export default new TopMenu();