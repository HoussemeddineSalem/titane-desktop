import {EventEmitter, Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {Member, Recipe} from './member.model';
import {Ingredient} from '../shared/ingredient.model';
import {LendingListService} from '../lending-list/lending-list.service';
import {Observable} from "rxjs";

@Injectable()
export class MemberService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];
  url = 'http://localhost:8080/v1/member';

  constructor(private http: HttpClient) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    //this.slService.addIngredients(ingredients);
  }

  createMember(member): Observable<any> {
    return this.http.post(this.url, member);
  }

  getMember(): Observable<Member[]> {
    return this.http.get<Member[]>(this.url);
  }

  updateMember(memberId, member): Observable<any> {
    return this.http.put(this.url + '/' + memberId, member);
  }
}
