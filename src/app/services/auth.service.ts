import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singlResponseModel';
import { TokenModel } from '../models/tokenModels';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//https://localhost:44340/api/Auth/register
//https://localhost:44340/api/Auth/login
  apiUrl="https://localhost:44340/api/Auth/"
  constructor(private httpClient:HttpClient) { }

  login(user:LoginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",user)
  }

  //kişinin Authenticate olup,olmadığı bilgisini veren bir metod yazalım.
  isAuthenticated(){
    if (localStorage.getItem("token")) {
      return true;
    }
    else{
      return false;
    }
  }

}
