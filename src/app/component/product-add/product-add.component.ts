import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  productAddForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private productService:ProductService
    ,private toastrService:ToastrService) {}

  ngOnInit(): void {
    this.createProductForm();
  }

  //Aşağıdaki yapı sayesinde form oluşturacağız.
  createProductForm() {
    this.productAddForm = this.formBuilder.group({
      //ürün eklerke formda olmasını istediğimiz alanları burada configure edeceğiz.
      productName: ['', Validators.required], //burada propertynin default değeri boş olsun ve valiator'ın gerekli olduğunu bildiriyoruz.
      unitPrice: ['', Validators.required],
      unitsInStock: ['', Validators.required],
      categoryId: ['', Validators.required],
      //html'imizde hangi alanlar map edilecek ve o alandaki kurallar nelerdir .
      //Bu alan onunla ilgilenmektedir.
    });
  }
  add(){

    //geçerlilik kontrolünü sağlamamız gerekmektedir.
    if (this.productAddForm.valid) { //eğer değerler bir validationdan geçmiş ise diğer kontrol ediyoruz.
    let productModel = Object.assign({},this.productAddForm.value)  //buradaki satırda formumuz gönderilen değerler ile birebir uyuşmaktamıdır diye kontrol edilmektedir.    
    this.productService.add(productModel).subscribe(data=>{
    console.log();
    this.toastrService.success("Ürün başarıyla eklendi")

    }, responseError=>{console.log(responseError.error)})//productModel içerisindeki veriler zaten form içerisindeki veriler ile aynıdır dolayısıyla 
    //Herhangi bir problem olmaması durumunda add ile productModel'i ekle anlamına gelmektedir.
    
  }else{
      this.toastrService.error("Eksik Yada Hatalı!")
    }
    
  }
}
