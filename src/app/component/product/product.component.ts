import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
 
  products:Product[] = [];
  dataLoaded=true;
  constructor(private productService:ProductService) {}

  ngOnInit(): void {
    this.getProducts();
}
getProducts(){
  console.log("basladi")
 this.productService.getProducts().subscribe(response=>{this.products=response.Data});
 console.log("merhaba");
 this.dataLoaded=false;
}   
}
