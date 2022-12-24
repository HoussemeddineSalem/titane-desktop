import { Component, OnInit } from '@angular/core';

import { Recipe } from './book.model';
import { BookService } from './book.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BookService]
})
export class BookComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: BookService) { }

  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.selectedRecipe = recipe;
        }
      );
  }

}
