import {CompanyRepository} from "../utils/CompanyRepository";
import {Customer} from "../models/Customer";
import {CustomerDataAccess} from "../CustomerDataAccess";
const moment = require('moment');


export class CustomerService {

    addCustomer(firstName: String, surname: String, email: String, dateOfBirth: Date, companyId: String) {
        if (!firstName || !surname) {
            throw Error('No first name or surname provided');
        }

        if (!email.includes("@") && !email.includes(".")) {
            throw Error('invalid email');
        }

        // maybe use moment lib; Considered to be using dob as Date object and using _ by convention on private functions
        const age = this._dateDiff('y', dateOfBirth.getTime());
        if (age < 21) {
            throw Error('Too young');
        }

        const companyRepository = new CompanyRepository();
        const company = companyRepository.getById(companyId);

        const customer: Customer = {
            company: company,
            dateOfBirth: dateOfBirth,
            emailAddress: email,
            firstName: firstName,
            surname: surname
        };
        if (company.skipCreditCheck) {
            // Skip credit check
            customer.hasCreditLimit = false;
        } else {
            // Do credit check
            customer.hasCreditLimit = true;
            customer.creditLimit = 10;
        }

        if (customer.hasCreditLimit && customer.creditLimit < 500) {
            throw Error('Credit limit exceeded');
        }

        CustomerDataAccess.addCustomer(customer);

        return true;
    }

    // datePart: 'y', 'm', 'w', 'd', 'h', 'n', 's'
    //I'd rather use the moment naming convention directly instead of this switch statement
    _dateDiff(datePart: any, date: number) {
        datePart = datePart.toLowerCase();

        let unit;

        switch (datePart) {
            case 'y': {
                unit = 'years';
                break;
            }
            case 'm': {
                unit = 'months';
                break;
            }
            case 'w': {
                unit = 'weeks';
                break;
            }
            case 'd': {
                unit = 'days';
                break;
            }
            case 'h': {
                unit = 'hours';
                break;
            }
            case 'm': {
                unit = 'minutes';
                break;
            }
            case 's': {
                unit = 'seconds';
                break;
            }
            default: {
                throw Error('Invalid date part. Please use one of: \'y\', \'m\', \'w\', \'d\', \'h\', \'n\', \'s\'');
            }
        }

        return moment().diff(date, datePart);
    }
}
