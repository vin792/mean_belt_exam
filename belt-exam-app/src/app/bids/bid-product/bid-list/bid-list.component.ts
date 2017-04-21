import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../product';

@Component({
  selector: 'app-bid-list',
  templateUrl: './bid-list.component.html',
  styleUrls: ['./bid-list.component.css']
})
export class BidListComponent implements OnInit {

  @Input() product: Product
  public bids: Array<any> = [];
  public bidsUnfiltered: Array<any> = [];
  public search: string;

  constructor() { }

  ngOnInit() {
    this.bids = this.product.bids;
    this.bidsUnfiltered = this.product.bids;
  }

  filterTable(value){
    this.bids = Object.assign([], this.bidsUnfiltered).filter(
      bid => bid.bid.toString().indexOf(value.toLowerCase()) > -1 || bid.username.toLowerCase().indexOf(value.toLowerCase()) > -1)
  }
}
