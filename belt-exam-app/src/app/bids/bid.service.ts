import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';
import { Bid } from './bid';

@Injectable()
export class BidService {

  constructor(private _http: Http) { }

  getProducts() {
    return this._http.get('/getproducts')
       .map((response: Response) => response.json())
  }

  submitBid(newBid: Bid){
    return this._http.post('submitbid',newBid)
      .map((response: Response) => response.json())
  }

  restartBids() {
    return this._http.get('restartbids')
      .map((response: Response) => response.json())
  }
}
