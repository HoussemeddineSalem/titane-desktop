import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter, Injectable} from '@angular/core';
import {MemberService} from '../member/member.service';
import {BookService} from '../book/book.service';

@Injectable()
export class LendingListService {

  constructor(private memberService: MemberService, private bookService: BookService) {
  }


  getLentBooksList() {
    let list = [];

    this.bookService.getBooks(null).subscribe(books => {
      this.memberService.getMember().subscribe(members => {
        list = members.map(member => {
          member.borrowedBooksIds = books.filter(book => member.borrowedBooksIds.includes(book.id));
        });
      });
    });

    return list;

    // this.memberService.getMember().subscribe(members => {
    //   members.forEach(member => {
    //     member.borrowedBooksIds.forEach(bId => {
    //       this.bookService.getBooks(bId).subscribe(_ => {
    //         console.log(_);
    //         member.borrowedBooksIds = _;
    //       });
    //     });
    //     console.log(member);
    //   });
    // });
  }
}
