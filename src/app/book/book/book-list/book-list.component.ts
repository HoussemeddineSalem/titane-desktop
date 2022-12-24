import { Component, OnInit } from '@angular/core';
import {MemberService} from '../../../member/member.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Book} from '../../book.model';
import {BookService} from '../../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];
  isAddNewBookButtonClicked = false;

  constructor(
              private bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.getBooks(null).subscribe(res => this.books = res.reverse());
  }

  onNewRecipe() {
    this.isAddNewBookButtonClicked = !this.isAddNewBookButtonClicked;
  }

  newBookAdded(books) {
    this.books = books.reverse();
  }

}
