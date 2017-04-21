import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';
import { Bid } from '../bid';
import { BidService } from '../bid.service';

@Component({
  selector: 'app-bid-product',
  templateUrl: './bid-product.component.html',
  styleUrls: ['./bid-product.component.css']
})
export class BidProductComponent implements OnInit {

  @Input() product: Product;
  @Input() myUsername: string;
  @Output() newBidAdded = new EventEmitter()
  public newBid: Bid = new Bid();
  public serverResponse = {status: true, message: "no Response"}

  constructor(private _bidService: BidService) { }

  ngOnInit() {
    this.newBid.username = this.myUsername
    this.newBid.productID = this.product._id
  }

  onSubmit() {
    this._bidService.submitBid(this.newBid)
      .subscribe(
        (data) => {this.serverResponse = data}, 
        (error) => console.log(error), 
        () => {
          if(this.serverResponse.status){
            this.newBidAdded.emit()
          }
          
        }
      )
    this.newBid = new Bid();
    this.newBid.username = this.myUsername
    this.newBid.productID = this.product._id
  }
}
