import { Address } from "./address";

export class EmployeeDto {

    [key: string]: any;
    id?: string = '';
    firstName: string = '';
    lastName: string = '';
    status: string = '';
    address: Address = new Address();
    entryDate: Date = new Date();
    apInvoices: string[] = [];
    accountings: string[] = [];

    constructor(properties?: EmployeeDto) {
      if (properties) {
        this.id = properties.id || '';
        this.firstName = properties.firstName || '';
        this.lastName = properties.lastName || '';
        this.status = properties.status || '';
        this.address = properties.address || new Address();
        this.entryDate = properties.entryDate || new Date();
        this.apInvoices = properties.apInvoices || [];
        this.accountings = properties.accountings || [];
      }
    }
}
