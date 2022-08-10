export class Stats {
    public cottageName: String;
    public income: number;
    public numOfPeople: number;

    constructor(cottageName: String = '', income: number = 0, numOfPeople: number) {
        this.cottageName = cottageName;
        this.income = income;
        this.numOfPeople = numOfPeople;
    }
}