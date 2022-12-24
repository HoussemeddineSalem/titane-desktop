import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';
import {BookService} from "../book.service";
import {logger} from "codelyzer/util/logger";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  id: number;
  editMode = false;
  firstName: string;
  lastName: string;
  email: string;

  constructor(private route: ActivatedRoute, private recipeService: BookService) {
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

       this.recipeService.getMember().subscribe(_ => console.log(_));
    });
  }


}
