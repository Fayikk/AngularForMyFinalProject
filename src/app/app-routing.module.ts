import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductComponent } from './component/product/product.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full",component:ProductComponent},//Birşey verilmezse ana sayfamda ne olsun anlamıan gelemktedir.
  {path:"products",component:ProductComponent},
  {path:"products/category/:categoryId",component:ProductComponent},
  {path:"products/add",component:ProductAddComponent,canActivate:[LoginGuard]},
  //hemen yukarıdaki yolda LoginGuard entegrasyonunu gerçekleştiriyoruz.
  {path:"login",component:LoginComponent},//login denildiği zaman burada gelmesini beklemekteyiz.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
