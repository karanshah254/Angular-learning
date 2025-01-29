// class and interface

export class Car {
    carId: number;
    brand: string;
    model: string;
    year: number;
    color: string;
    regNo: number;

    constructor() {
        this.carId = 0;
        this.brand = '';
        this.model = '';
        this.year = 0;
        this.color = '';
        this.regNo = 0;
    }
}

export interface ICarList {
    // interface has no constructor
    carId: number,
    brand: string,
    model: string,
    year: number,
    color: string,
    regNo: number,
}