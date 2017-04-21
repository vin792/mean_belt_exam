export class Product {
    constructor(
        public _id: string= null,
        public name: string = "",
        public highBid: object = {},
        public bids: Array<object> = []
    ) {}
}
