import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './Pages/checkout/checkout.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { CartLogoutComponent } from './cart-logout/cart-logout.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CheckoutPageComponent } from './Pages/checkout-page/checkout-page.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'cart-logout', component: CartLogoutComponent },
  { path: 'product-detail', component: ProductDetailComponent },
  { path: 'checkout-page', component: CheckoutPageComponent },
  { path: 'shipping-address', component: ShippingAddressComponent },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
