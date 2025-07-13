import { faker } from '@faker-js/faker';

export function generateUserData() {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    company: faker.company.name(),
    address: faker.location.streetAddress(),
    address2: faker.location.secondaryAddress(),
    state: faker.location.state(),
    city: faker.location.city(),
    zipcode: faker.location.zipCode(),
    mobileNumber: faker.phone.number(),
  };
}
export function generalFixedData() {
  return {
    title: 'Mr',
    country: 'United States',
    day: '29',
    month: 'March',
    year: '1990',
  };
}
