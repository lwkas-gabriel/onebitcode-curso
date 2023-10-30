import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomRecipesService {

  constructor(private http: HttpClient) { }

  listRandomFood(take: number){
    const apiUrl = `https://api.spoonacular.com/recipes/random?apiKey={884df11ed8b8401b9a2582ff7198c7a8}&number=$`;
    return this.http.get(apiUrl);
  }
}
