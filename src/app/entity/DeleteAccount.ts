import { Account } from "./Account";

export class DeleteAccount {
    id: number;
    account: Account;
    description: string;
    answer: string;

    constructor(id: number,account: Account, description: string, answer: string) {
        this.id = id;
        this.account = account;
        this.description = description;
        this.answer = answer;

    }
}