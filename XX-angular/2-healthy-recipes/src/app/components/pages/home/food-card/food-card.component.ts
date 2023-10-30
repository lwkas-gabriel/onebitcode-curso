import { Component } from '@angular/core';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.css']
})
export class FoodCardComponent {
  public foods: any = [];
  public loading: boolean = true;
  public loadingMore: boolean = false;
}
