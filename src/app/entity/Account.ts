import { Address } from "./Address";
import { Status } from "./Status";

export class Account {
    id: number;
    username: string;
    email: string;
    password: string;
    name: string;
    lastName: string;
    phoneNumber: string;
    address: Address;
    role: string;
    status: Status;

    constructor(id: number, username: string, email: string, password: string, name: string, lastName: string, phonenumber: string, address: Address, role: string, status:Status) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.name = name;
        this.lastName = lastName;
        this.phoneNumber = phonenumber;
        this.address = address;
        this.role = role;
        this.status = status;
    }
}
