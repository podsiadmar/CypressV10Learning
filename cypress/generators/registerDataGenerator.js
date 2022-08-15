const { faker } = require("@faker-js/faker");
//this generator returns data for registration
class RegisterGenerator{
    getRandom(){
        let firstName = faker.firstName();
        let lastName = faker.lastName();
        let email = firstName+"."+lastName+"@mail.com"
        let password = faker.password();

        return {firstName, lastName, email, password}
    }
}

export default new RegisterGenerator();