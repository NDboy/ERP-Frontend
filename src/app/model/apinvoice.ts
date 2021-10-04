import { Accounting } from "./accounting";
import { Employee } from "./employee";
import { Invoiceitem } from "./invoiceitem";
import { Partner } from "./partner";
import { PaymentModeAndDates } from "./payment-mode-and-dates";

export class Apinvoice {

    [key: string]: any;
    id?: string = '';
    invNum: string = '';
    paymentModeAndDates: PaymentModeAndDates = new PaymentModeAndDates();
    partnerId: string = '';
    invoiceStatus: string = '';
    invoiceItems: Invoiceitem[] = [];
    employeeId: string = '';

    constructor(properties?: Apinvoice) {
        if (properties) {
          this.id = properties.id || '';
          this.invNum = properties.invNum || '';
          this.paymentModeAndDates = properties.paymentModeAndDates || new PaymentModeAndDates();
          this.partnerId = properties.partnerId || '';
          this.invoiceStatus = properties.invoiceStatus || '';
          this.invoiceItems = properties.invoiceItems || [];
          this.employeeId = properties.employeeId || '';
        }
    }
}
