import {Classification} from "../enums/Classification";
import {Class} from "@babel/types";

export class Company {
    private _id: String;
    private _name: String;
    private _skipCreditCheck: boolean;
    private _classification: Classification;

    constructor(id: String, name: String, skipCreditCheck: boolean, classification: Classification) {
        this._id = id;
        this._name = name;
        this._skipCreditCheck = skipCreditCheck;
        this._classification = classification;
    }

    get id(): String {
        return this._id;
    }

    get name(): String {
        return this._name;
    }

    get skipCreditCheck(): boolean {
        return this._skipCreditCheck;
    }

    get classification(): Classification {
        return this._classification;
    }

    set id(id: String) {
        this._id = id;
    }

    set name(name: String) {
        this._name = name;
    }

    set skipCreditCheck(skipCreditCheck: boolean) {
        this._skipCreditCheck = skipCreditCheck;
    }

    set classification(classification: Classification) {
        this._classification = classification;
    }
}
