export class VatItem {

    vatRate: number = 0;
    vatAmount: number = 0;

    constructor(vatRate: number, vatAmount: number) {
        this.vatRate = vatRate || 0;
        this.vatAmount = vatAmount || 0;
    }


}
