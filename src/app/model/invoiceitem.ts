export class Invoiceitem {

    itemName: string = '';
    netPrice: number = 0;
    vatRate: number = 0;
    vatAmount: number = 0;
    grossPrice: number = 0;

    constructor(itemName:string, netPrice:number, vatRate:number){
        if(itemName && netPrice && vatRate) {
            this.itemName = itemName || '';
            this.netPrice = netPrice || 0;
            this.vatRate = vatRate || 0;
            this.vatAmount = netPrice * vatRate / 100 || 0;
            this.grossPrice = Math.round(netPrice * (1 + vatRate / 100)*100)/100 || 0;
        }
    }

}