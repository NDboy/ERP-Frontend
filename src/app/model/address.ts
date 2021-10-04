export class Address {

    country: string = '';
    zipCode: string = '';
    line: string = '';

    constructor(address?: Address){
        if(address) {
            this.country = address.country || '';
            this.zipCode = address.zipCode || '';
            this.line = address.line || '';
        }
    }
}
