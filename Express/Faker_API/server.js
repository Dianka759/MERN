const express = require('express')
const app = express()
const faker = require('@faker-js/faker');

// Creating a user
class User {
    constructor() {
        this.id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

// Creating a company
class Company {
    constructor() {
        this.id = faker.datatype.uuid();
        this.name = faker.name.findName();
        this.address = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}

// App route to display a random new user
app.get("/api/users/new", (request, response) => {
    const new_user = new User();
    response.json({ New_User: new_user })
});

// app route to create a random new company
app.get("/api/companies/new", (request, response) => {
    const new_company = new Company();
    response.json({ New_Company: new_company })
});

// app route to create a random new user and company
app.get("/api/user/company", (request, response) => {
    const new_user = new User();
    const new_company = new Company();
    response.json({ New_User: new_user, New_Company: new_company })
});


app.listen(8000, () => {
    console.log(`SUCCESS!!! Listening on port 8000.`)
});