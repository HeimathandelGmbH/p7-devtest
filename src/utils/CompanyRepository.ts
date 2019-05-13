import {Company} from "../models/Company";
import {Classification} from "../enums/Classification";

export class CompanyRepository {

    getById(id: String): Company {
        return {
            id: id,
            name: "test",
            skipCreditCheck: true,
            classification: Classification.Bronze
        }
    }
}