import { Account } from "./Account";

export class Client{

    account: Account;

    constructor( account: Account){
        this.account= new Account(account.id,account.username,account.email,account.password,account.name,account.lastName,account.phoneNumber,account.address,account.role)

    }


}
