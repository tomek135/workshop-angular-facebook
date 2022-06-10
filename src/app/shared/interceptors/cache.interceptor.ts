import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';


const cache = new Map();


@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  dateNow = new Date();

  constructor() { 
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // const date = new Date();
    // if(date.getTime() - this.dateNow.getTime() > environment.requestCacheTime){
    //   console.log("a" , date.getTime() - this.dateNow.getTime());
    //   this.deleteCache();
    // }
    if (cache.has(request.url)) {
      console.debug('Cache: get form map', { request, next });
      const record = cache.get(request.url);
      if(record.ttl + environment.requestCacheTime >  Date.now()){
        console.debug('Cache: Return from cache', request.url);
        return of(record.response);
      }
      else{
        console.debug('Cache: Remove record', request.url);
        cache.delete(request.url);
      }
    }
    return next.handle(request).pipe(
      tap((response) => {
        if (response.type !== HttpEventType.Response) {
          return;
        }
        cache.set(response.url, response.clone())
        console.debug('Cache saving', response.url);
      })
    )
  }

}
