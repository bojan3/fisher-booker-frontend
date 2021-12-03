export class Address{
    id: number;
    country: string;
    city: string;
    street: string;
    number: string;

    constructor(id: number, country: string, city: string, street: string, number: string) {
        this.id = id;
        this.country = country;
        this.city = city;
        this.street = street;
        this.number = number;
    }

}