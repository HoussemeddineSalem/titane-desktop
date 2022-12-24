import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {logger} from 'codelyzer/util/logger';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BookService]
})
export class BookComponent implements OnInit {

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks(null).subscribe(_ => console.log(_));
  }

}
