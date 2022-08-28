export class Stats {
    public realEstate: String;
    public income: number;
    public numOfPeople: number;

    constructor(realEstate: String = '', income: number = 0, numOfPeople: number) {
        this.realEstate = realEstate;
        this.income = income;
        this.numOfPeople = numOfPeople;
    }
}