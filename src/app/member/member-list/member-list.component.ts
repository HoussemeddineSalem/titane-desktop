import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../member.model';
import { MemberService } from '../member.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  recipes: any[];

  constructor(private recipeService: MemberService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.recipeService.getMember().subscribe(res => this.recipes = res);
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
