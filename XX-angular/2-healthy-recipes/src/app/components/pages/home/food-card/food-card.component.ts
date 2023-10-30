import { Component } from '@angular/core';
import {finalize} from 'rxjs';
import { RandomRecipesService } from 'src/app/services/random-recipes/random-recipes.service';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.css']
})
export class FoodCardComponent {
  public foods: any = [];
  public loading: boolean = true;
  public loadingMore: boolean = false;

  constructor(private service: RandomRecipesService){

  }

  ngOnInit(): void{
    this.getFoods();
  }

  getFoods(){
    this.service.listRandomFood(6).pipe(
      finalize(() => {
        this.loading = false;
      })
    ).subscribe((data: any) => {
      this.foods = this.foods.concat(data.recipes);
    });
  }

  loadMore(){

  }
}
