import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { BidService } from '../bids/bid.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bid-result',
  templateUrl: './bid-result.component.html',
  styleUrls: ['./bid-result.component.css']
})
export class BidResultComponent implements OnInit {

  public validLogin: object= {status: false, username: ""};
  public products: Array<any> = [];
  
  constructor(private _loginService: LoginService, private _bidService: BidService, private _router: Router) { }

  ngOnInit() {
    this.checkLogin();
    this.getProducts();
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

  getProducts() {
    this._bidService.getProducts()
      .subscribe(
        (data) => {this.products = data}, 
        (error) => console.log(error), 
      )
  }

  restartBids() {
    this._bidService.restartBids()
      .subscribe(
        (data) => {console.log(data)}, 
        (error) => console.log(error), 
        () => this._router.navigate(['bids'])
      )
  }

  
}
