import { Account } from "./Account";
import { Cottage } from "./Cottage";
import { FishingInstructor } from "./FishingInstructor";
import { Ship } from "./Ship";

export class Client{

    account: Account;

    shipSubscriptions: Ship[];
    cottageSubscriptions: Cottage[];
    instructorSubscriptions: FishingInstructor[];

    constructor(account: Account, shipSubscriptions: Ship[], cottageSubscriptions: Cottage[], instructorSubscriptions: FishingInstructor[]){
        this.account= new Account(account.id,account.username,account.email,account.password,account.name,account.lastName,account.phoneNumber,account.address,account.role,account.status);
        this.shipSubscriptions = shipSubscriptions;
        this.cottageSubscriptions = cottageSubscriptions;
        this.instructorSubscriptions = instructorSubscriptions;

    }
}
