import { Component, OnInit } from '@angular/core';
import { BidService } from './bid.service';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css']
})
export class BidsComponent implements OnInit {
  
  public products: Array<any> = [];
  public validLogin: object= {status: false, username: ""};
  public endBidValidation = {status: true, message:""}

  constructor(private _bidService: BidService, private _loginService: LoginService, private _router: Router) { }

  ngOnInit() {
    this.getProducts();
    this.checkLogin()
  }

  getProducts() {
    this._bidService.getProducts()
      .subscribe(
        (data) => {this.products = data}, 
        (error) => console.log(error), 
      )
  }

  updateProducts() {
    this.getProducts();
    this.endBidValidation = {status: true, message:""}
  }

  checkLogin() {
    this._loginService.checkLogin()
      .subscribe(
        (data) => this.validLogin = data, 
        (error) => console.log(error), 
      )
  }

  logout(){
    this._loginService.logout();
  }

  endBid(){
    for (let i=0; i<this.products.length; i++){
      if(this.products[i].bids.length < 1){
        this.endBidValidation = {status: false, message: "Cannot End Bid. One Product does not have any bid yet."}
      }
    }
    if(this.endBidValidation.status){
      this._router.navigate(['result']);
    }
  }

}
