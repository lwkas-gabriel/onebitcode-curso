import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  search(query: string){
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=884df11ed8b8401b9a2582ff7198c7a8&query=${query}&number=10`;

    return this.http.get(apiUrl);
  }
}
