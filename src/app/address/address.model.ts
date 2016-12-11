export class Address {
    firstName: string;
    lastName: string;
    startMonth: number;
    endMonth: number;

    constructor(_firstName:string, _lastName:string, _startMonth:number, _endMonth:number) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.startMonth = _startMonth;
        this.endMonth = _endMonth;
    }
}