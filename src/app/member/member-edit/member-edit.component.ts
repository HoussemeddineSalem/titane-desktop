import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';
import {MemberService} from "../member.service";
import {logger} from "codelyzer/util/logger";

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  id: number;
  editMode = false;
  firstName: string;
  lastName: string;
  email: string;

  @Output() newMemberAdded = new EventEmitter<any>();

  constructor(private route: ActivatedRoute, private recipeService: MemberService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
        }
      );
  }

  createMember() {
    this.recipeService.createMember({
      firstName: this.firstName, lastName: this.lastName, email: this.email
    }).subscribe(_ =>  {
      this.firstName = null;
       this.lastName = null;
       this.email = null ;

      // tslint:disable-next-line:no-shadowed-variable
       this.recipeService.getMember().subscribe(_ => this.newMemberAdded.emit(_));
    });
  }


}
