import { AuthGuardService as AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CarritodecomprasComponent } from './carritodecompras/carritodecompras.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarcompComponent } from './navbarcomp/navbarcomp.component';
import { OrdersComponent } from './orders/orders.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './login/login.component';
import { AngularFireAuth } from 'angularfire2/auth';


@NgModule({
  declarations: [
    AppComponent,
    NavbarcompComponent,
    HomeComponent,
    CarritodecomprasComponent,
    ProductsComponent,
    OrdersComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    RouterModule.forRoot([
        { path: '', component: HomeComponent },
        { path: 'products', component: ProductsComponent },
        { path: 'shopping-cart', component: CarritodecomprasComponent },
        { path: 'my-orders', component: MyOrdersComponent },
        { path: 'admin/products', component: AdminProductsComponent},
        { path: 'login', component: LoginComponent},
        { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService]},


    ]),
    NgbModule.forRoot(),
  ],
  providers: [AngularFireAuth,
    AuthService,
    AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
