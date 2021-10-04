import { InvoiceValues } from "./invoice-values";

export class PaymentModeAndDates {

    paymentMode: string = '';
    invoicingDate: Date = new Date();
    dueDate: Date = new Date();
    iban: string = '';
    invoiceCurrency: string = '';
    invoiceValues: InvoiceValues = new InvoiceValues();

    constructor(payment?: PaymentModeAndDates){
        if(payment) {
            this.paymentMode = payment.paymentMode || '';
            this.invoicingDate = payment.invoicingDate || new Date();
            this.dueDate = payment.dueDate || new Date();
            this.iban = payment.iban || '';
            this.invoiceCurrency = payment.invoiceCurrency || '';
            this.invoiceValues = payment.invoiceValues || new InvoiceValues();
        }
    }
}
