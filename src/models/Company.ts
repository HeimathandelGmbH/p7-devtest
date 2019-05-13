import {Classification} from "../enums/Classification";

export class Company {

    constructor(id: String, name: String, skipCreditCheck: boolean, classification: Classification) {
        this.id = id;
        this.name = name;
        this.skipCreditCheck = skipCreditCheck;
        this.classification = classification;
    }

    get id() {
        return this.id;
    }

    get name() {
        return this.name;
    }

    get skipCreditCheck() {
        return this.skipCreditCheck;
    }

    get classification() {
        return this.classification;
    }

    set id(id: String) {
        this.id = id;
    }

    set name(name: String) {
        this.name = name;
    }

    set skipCreditCheck(skipCreditCheck: boolean) {
        this.skipCreditCheck = skipCreditCheck;
    }

    set classification(classification: Classification) {
        this.classification = classification;
    }
}
