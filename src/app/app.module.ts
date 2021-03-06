import { AdminAuthGuardService as AdminAuthGuard } from './admin-auth-guard.service';
import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuth} from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import{LoginComponent} from './login/login.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CustomFormsModule} from 'ng2-validation';
import {DataTableModule} from 'angular5-data-table';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthGuard } from './auth-guard.service';
import { UserService } from './user.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ProductFilterComponent
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    CustomFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent},
      { path: '', component: ProductsComponent},
      { path: 'products', component: ProductsComponent},
      { path: 'shopping-cart', component: ShoppingCartComponent},

      { path: 'my/orders', component: MyOrdersComponent,canActivate: [AuthGuard]},
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard]},
      { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard]},

   
      { path: 'admin/products/new',
      component: ProductFormComponent
     },
     { path: 'admin/products/:id',
     component: ProductFormComponent
      },
      { path: 'admin/products',
      component: AdminProductsComponent,
       },
      { path: 'admin/orders',
       component: AdminOrdersComponent,
        canActivate: [AuthGuard,AdminAuthGuard]},
    ])
  ],
  providers: [
  AuthService,AngularFireAuth,AuthGuard
  ,UserService,AdminAuthGuard,
  CategoryService,
  ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
