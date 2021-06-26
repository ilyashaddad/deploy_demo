import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

// rest api
const apiUrl = environment.BACK_END_API;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  public getNews(): any {
    const query = '{ allnews{id,thematic,description,title,resume,image,date}}';
    return this.http.get(`${apiUrl}/graphql?query=${query}`);
  }
  public getNews_by_ID(id: any): any {
    const query = `{ new(newId:${id}){id,thematic,description,title,resume,image,date}}`;
    return this.http.get(`${apiUrl}/graphql?query=${query}`);
  }
  public check(request: string): any {
    const query = ``;
    return this.http.post(`${apiUrl}/graphql?query=${query}`, request);
  }

}
