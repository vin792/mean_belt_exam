import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BidsComponent } from './bids/bids.component';
import { BidResultComponent } from './bid-result/bid-result.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'bids', component: BidsComponent },
    { path: 'result', component: BidResultComponent },
];
export const routing = RouterModule.forRoot(APP_ROUTES);