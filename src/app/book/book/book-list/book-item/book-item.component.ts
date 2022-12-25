import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../../../book.model';
import {BookService} from '../../../book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;
  @Input() index: number;
  @Output() bookDeleted: EventEmitter<any> = new EventEmitter<any>();
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  deleteBook(id){
    this.bookService.deleteBook(id).subscribe(_ => this.bookDeleted.emit(id))}

}
