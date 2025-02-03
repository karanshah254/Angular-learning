export class User {
    userId: number;
    fName: string;
    lName: string;
    username: string;
    city: string;
    state: string;
    zipCode: string;
    isAgree: boolean;

    constructor() {
        this.userId = 0;
        this.fName = '';
        this.lName = '';
        this.username = '';
        this.city = '';
        this.state = '';
        this.zipCode = '';
        this.isAgree = false;
    }
}