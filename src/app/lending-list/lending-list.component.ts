import {Component, OnInit} from '@angular/core';

import {BookService} from '../book/book.service';
import {MemberService} from '../member/member.service';

@Component({
  selector: 'app-lending-list',
  templateUrl: './lending-list.component.html',
  styleUrls: ['./lending-list.component.css']
})
export class LendingListComponent implements OnInit {
  list: any[];

  constructor(private bookService: BookService, private memberService: MemberService) {
  }

  ngOnInit() {

    this.newBookLent(null);
  }

  newBookLent(_) {
    this.bookService.getBooks(null).subscribe(books => {
      this.memberService.getMember().subscribe(members => {
        members.forEach(member => {
          member.borrowedBooksIds = books.filter(book => member?.borrowedBooksIds?.includes(book.id));
        });
        this.list = members?.reverse();
      });
    });
  }
}
