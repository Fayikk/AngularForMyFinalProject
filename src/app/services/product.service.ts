import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http'
import { productResponseModel } from 'src/app/models/productResponseModel';
import { Observable } from 'rxjs';//observable rxjs'den gelmektedir

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl="https://localhost:44340/api/Products/getall"

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<productResponseModel>{
    return this.httpClient.
    get<productResponseModel>(this.apiUrl)
    //gelen datayı productresponsemodele map edeceksin anlamına gelmektedir. 
  }  
}
