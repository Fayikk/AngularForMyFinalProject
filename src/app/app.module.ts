import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http"//import ediyoruz
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './component/category/category.component';
import { NaviComponent } from './component/navi/navi.component';
import { ProductComponent } from './component/product/product.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from "ngx-toastr";
import { CartSummaryComponent } from './component/cart-summary/cart-summary.component';
import { ProductAddComponent } from './component/product-add/product-add.component'

@NgModule({
  declarations: [//component kullanılacğı zaman otomatik olarak eklmee işlemini gerçekeleştirecektir. 
    AppComponent,
    CategoryComponent,
    NaviComponent,
    ProductComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,//hangi import elemanının kullanılcağoını belli ediyoruz
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
