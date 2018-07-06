import { Injectable } from '@angular/core';

import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class Interceptor implements HttpInterceptor {

 private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';

 intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {

  request = request.clone({
    setHeaders: {
      Authorization: 'Bearer ' + this.token
    }
  });

  return next.handle(request);

 }

}