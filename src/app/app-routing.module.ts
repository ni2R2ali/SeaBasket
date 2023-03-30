import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './Pages/checkout/checkout.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { ProductListingComponent } from './product-listing/product-listing.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'checkout', component: CheckoutComponent },
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProductListingComponent,
      },
      { path: ':category', component: ProductListingComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
