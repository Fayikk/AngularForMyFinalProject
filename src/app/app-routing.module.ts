import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './component/product/product.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:ProductComponent},//Birşey verilmezse ana sayfamda ne olsun anlamıan gelemktedir.
  {path:"products",component:ProductComponent},
  {path:"products/category/:categoryId",component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
