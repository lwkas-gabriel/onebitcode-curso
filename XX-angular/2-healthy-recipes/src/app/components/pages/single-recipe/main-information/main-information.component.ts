import { Component, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
import { SingleRecipeService } from 'src/app/services/single-recipe/single-recipe.service';

@Component({
  selector: 'app-main-information',
  templateUrl: './main-information.component.html',
  styleUrls: ['./main-information.component.css']
})
export class MainInformationComponent {
  public loading: boolean = true;
  public recipeId: number = 1;
  public food:any = [];

  @Output() recipeIdSimilar!: number;

  constructor(private service: SingleRecipeService, private route: ActivatedRoute){

  }

  ngOnInit(): void{
    // pega o id da direto da rota e joga na variavel de Id já inicializada
    this.getRecipeId();
    // usa o id ja pego e retorna as infos da receita desejada...
    this.takeRecipe(this.recipeId);
    this.recipeIdSimilar = this.recipeId;
  }

  getRecipeId(){
    this.route.queryParams.subscribe((queryParams: any)=>{
      //a linha abaixo pego id da rota
      this.recipeId = queryParams("id");
    });
  }

  takeRecipe(id: number){
    this.service
    .takeRecipe(id)
    .pipe(
      finalize(()=> {
        this.loading = false;
      })
      ).subscribe((data: any) => {
        this.food = data;
      });
  }

}
