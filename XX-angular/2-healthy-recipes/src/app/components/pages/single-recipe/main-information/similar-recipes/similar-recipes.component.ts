import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-similar-recipes',
  templateUrl: './similar-recipes.component.html',
  styleUrls: ['./similar-recipes.component.css']
})
export class SimilarRecipesComponent {
  public loading = true;

  @Input() recipeIdSimilar !: number;
}
