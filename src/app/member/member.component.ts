import { Component, OnInit } from '@angular/core';

import { MemberService } from './member.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  providers: [MemberService]
})
export class MemberComponent implements OnInit {

  constructor(private recipeService: MemberService) { }

  ngOnInit() {}

}
