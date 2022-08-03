import { Account } from "./Account";

export class DeleteAccount {
    id: number;
    account: Account;
    description: string;

    constructor(id: number,account: Account, description: string) {
        this.id = id;
        this.account = account;
        this.description = description;
    }
}