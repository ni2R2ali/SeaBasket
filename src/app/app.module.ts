import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { CheckoutComponent } from './Pages/checkout/checkout.component';
import { LoginComponent } from './Pages/login/login.component';
import { BannerComponent } from './banner/banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { CheckoutTotalComponent } from './checkout-total/checkout-total.component';
import { CheckoutProductsComponent } from './checkout-products/checkout-products.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { firebaseConfig } from './Config/firebase.config';
import { CategoryComponent } from './category/category.component';
import { SidebarModule } from 'ng-sidebar';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { CartLogoutComponent } from './cart-logout/cart-logout.component';
import { FilterPipe } from './shared/filter.pipe';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CheckoutPageComponent } from './Pages/checkout-page/checkout-page.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CheckoutComponent,
    LoginComponent,
    BannerComponent,
    ProductsComponent,
    CheckoutTotalComponent,
    CheckoutProductsComponent,
    CategoryComponent,
    SidebarComponent,
    ProfileComponent,
    CartLogoutComponent,
    FilterPipe,
    ConfirmationDialogComponent,
    ProductDetailComponent,
    CheckoutPageComponent,
    ShippingAddressComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgbModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    SidebarModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),

    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
