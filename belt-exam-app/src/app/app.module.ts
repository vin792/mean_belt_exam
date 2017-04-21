import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BidsComponent } from './bids/bids.component';
import { LoginService } from './login/login.service';
import { BidService } from './bids/bid.service';
import { BidProductComponent } from './bids/bid-product/bid-product.component';
import { BidResultComponent } from './bid-result/bid-result.component';
import { routing } from './app.routes';
import { BidListComponent } from './bids/bid-product/bid-list/bid-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BidsComponent,
    BidProductComponent,
    BidResultComponent,
    BidListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [LoginService, BidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
