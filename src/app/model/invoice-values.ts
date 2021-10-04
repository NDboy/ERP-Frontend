import { VatItem } from "./vat-item";

export class InvoiceValues {

    netValue: number = 0;
    vatTotal: number = 0;
    grossValue: number = 0;
    vatAmounts: VatItem[] = [];
    
    constructor(netValue?: number, vatTotal?: number, grossValue?: number, vatAmounts?: VatItem[]) {
        if (netValue && vatTotal && grossValue && vatAmounts) {
            this.netValue = netValue || 0;
            this.vatTotal = vatTotal || 0;
            this.grossValue = grossValue || 0;
            this.vatAmounts = vatAmounts || [];
        }
    }

}
