import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';//observable rxjs'den gelmektedir
// import { ListResponseModel } from '../models/ListResponseModel';
import { ListResponseModel } from '../models/ListResponseModel';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';
// import { Product } from '../models/product';
// import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl="https://localhost:44340/api/";

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl +"Products/getall"
    return this.httpClient.
    get<ListResponseModel<Product>>(newPath)
    //gelen datayı productresponsemodele map edeceksin anlamına gelmektedir. 
  } 
  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl +"Products/getbycategory?categoryId="+categoryId
    return this.httpClient.
    get<ListResponseModel<Product>>(newPath)
    //gelen datayı productresponsemodele map edeceksin anlamına gelmektedir. 
  } 
  add(product:Product):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Products/add",product)//burada hangi adrese ne göndereyim anlamına gelmektedir.
  }

}
