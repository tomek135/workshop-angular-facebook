import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Post } from '../interfaces/post.interface';
import { environment } from 'src/environments/environment';
import { delay, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) { }


  getPosts() {
      return this.makeRequest<Post[]>(environment.postUrl);
  }

  private fakeRequest<T>(_url?: string): Promise<T>{
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve([] as unknown as T)
      }, 2000);
    });
  }

  private makeRequest<T>(url: string): Promise<T>{

    return lastValueFrom<T>(this.http.get<T>(url).pipe(
      delay(2000)));
  }
}
