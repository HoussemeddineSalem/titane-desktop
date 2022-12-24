import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../book.model';
import { BookService } from '../book.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  recipes: any[];

  constructor(private recipeService: BookService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.recipeService.getMember().subscribe(res => this.recipes = res.reverse());
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
