import { Address } from "./Address";
//test
export class Account{
    id: number;
    username: string;
    email: string;
    password: string;
    name: string;
    lastName: string;
    phoneNumber: string;
    address: Address;
    role: string;

    constructor(id: number,username: string,email: string,password: string,name: string,lastName: string, phoneNumber: string, address:Address, role:string) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.name = name;
        this.lastName=lastName;
        this.phoneNumber=phoneNumber;
        this.address=address;
        this.role = role;
    }
}
