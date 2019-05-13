import {Company} from "./Company";

//we can use this notation, but I personally prefer constructor, getter, setter
export class Customer {
    firstName: String;
    surname: String;
    dateOfBirth: Date;
    emailAddress: String;
    hasCreditLimit?: boolean;
    creditLimit?: number;
    company: Company;
}