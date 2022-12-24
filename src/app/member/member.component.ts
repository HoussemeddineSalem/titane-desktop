import { Component, OnInit } from '@angular/core';

import { Recipe } from './member.model';
import { MemberService } from './member.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  providers: [MemberService]
})
export class MemberComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: MemberService) { }

  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.selectedRecipe = recipe;
        }
      );
  }

}
