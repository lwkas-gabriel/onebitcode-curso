import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingleRecipeService {

  constructor(private http: HttpClient) { }

  takeRecipe(id: number){
    const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=884df11ed8b8401b9a2582ff7198c7a8`;
    return this.http.get(apiUrl);
  }

  takeSimilarRecipe(id: number){
    const apiUrl = `https://api.spoonacular.com/recipes/${id}/similar?apiKey=884df11ed8b8401b9a2582ff7198c7a8`;
    return this.http.get(apiUrl);
  }
}
