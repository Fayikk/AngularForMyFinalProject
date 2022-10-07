import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http"//import ediyoruz

import { CategoryComponent } from './component/category/category.component';
import { NaviComponent } from './component/navi/navi.component';
import { ProductComponent } from './component/product/product.component';

@NgModule({
  declarations: [//component kullanılacğı zaman otomatik olarak eklmee işlemini gerçekeleştirecektir. 
    AppComponent,
    CategoryComponent,
    NaviComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule//hangi import elemanının kullanılcağoını belli ediyoruz
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
