import { Apinvoice } from "./apinvoice";
import { Employee } from "./employee";

export class Accounting {

    [key: string]: any;
    id?: string = '';
    accountingDate: Date = new Date();
    employee: Employee = new Employee();
    invoiceStatus: string = '';
    apinvoice: Apinvoice = new Apinvoice();

    constructor(properties?: Accounting) {
        if (properties) {
          this.id = properties.id || '';
          this.accountingDate = properties.accountingDate || new Date();
          this.employee = properties.employee || new Employee();
          this.invoiceStatus = properties.invoiceStatus || '';
          this.apinvoice = properties.apinvoice || new Apinvoice();
        }
    }
}

