import { Address } from "./Address";

export class Account{
    id: number;
    username: string;
    email: string;
    password: string;
    name: string;
    lastname: string;
    phonenumber: string;
    address: Address;
    role: string;

    constructor(id: number,username: string,email: string,password: string,name: string,lastname: string, phonenumber: string, address:Address, role:string) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.name = name;
        this.lastname=lastname;
        this.phonenumber=phonenumber;
        this.address=address;
        this.role = role;
    }
}