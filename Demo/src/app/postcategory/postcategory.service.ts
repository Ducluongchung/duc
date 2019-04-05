import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { PostCategory } from './postcategory';
import  {Configration } from '../configration';
import { HttpHeaders } from '@angular/common/http';  
@Injectable({
  providedIn: 'root'
})
export class PostcategoryService {

  link = Configration.url + 'postcategory';
  constructor(private http: HttpClient) {

  }
  getAll(): Observable<PostCategory[]> {
    return this.http.get<PostCategory[]>(this.link + '/getall');
  }
  create(postcategory: PostCategory): Observable<PostCategory> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<PostCategory>(this.link + '/add/',  
    postcategory, httpOptions);  
  }  

}
