import { Address } from "./Address";

export class Account{
    id: number;
    username: string;
    email: string;
    password: string;
    name: string;
    lastName: string;
    phonenumber: string;
    address: Address;


    constructor(id: number,username: string,email: string,password: string,name: string,lastName: string, phonenumber: string, address: Address) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.name = name;
        this.lastName=lastName;
        this.phonenumber=phonenumber;
        this.address=address;
    }
}