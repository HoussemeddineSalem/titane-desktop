import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MemberService } from '../member.service';
import {Member} from '../member.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members: Member[];
  isAddNewMemberButtonClicked = false;

  constructor(private memberService: MemberService) {
  }

  ngOnInit() {
    this.memberService.getMember().subscribe(res => this.members = res.reverse());
  }

  onNewRecipe() {
    this.isAddNewMemberButtonClicked = !this.isAddNewMemberButtonClicked;
  }

  newMemberAdded(members) {
    this.members = members.reverse();
  }
  memberDeleted(id) {
    console.log('ici');
    this.memberService.getMember().subscribe(res => this.members = res.reverse());
  }
}
