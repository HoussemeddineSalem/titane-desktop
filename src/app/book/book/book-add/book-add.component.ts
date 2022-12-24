import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Book} from '../../book.model';
import {BookService} from '../../book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  title: string;
  author: string;

  @Output() newBookAdded = new EventEmitter<any>();

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
  }

  createBook() {
    console.log('Hello');
    this.bookService.createBook({title: this.title, author: this.author}).subscribe(_ => {
      console.log(_);
      this.title = null;
      this.author = null;
      this.bookService.getBooks().subscribe(_ => this.newBookAdded.emit(_));
    });
  }


}
