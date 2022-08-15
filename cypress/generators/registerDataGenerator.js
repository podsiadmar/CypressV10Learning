import { faker } from '@faker-js/faker';

class RegisterGenerator{

    getRandom(){
       const firstName = faker.name.firstName();
       const lastName = faker.name.lastName();
       const email = firstName+"."+lastName+"@mail.com";
       const password = faker.internet.password();

        return {firstName, lastName, email, password}
    }

}
export default new RegisterGenerator();

