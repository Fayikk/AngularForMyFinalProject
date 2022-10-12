import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
//Bizim bütün http isteklerimizi intercept edecek kısımdır.(AuthInteceptor)
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let token = localStorage.getItem("token");
    let newRequest : HttpRequest<any>
    newRequest = request.clone({
      headers:request.headers.set("Authorization","Bearer" + token)
    })
    return next.handle(newRequest);
  }
}
