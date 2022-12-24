import {
  Component,
  OnInit,EventEmitter, Output
} from '@angular/core';


import {Book} from '../../book/book.model';
import {MemberService} from '../../member/member.service';
import {BookService} from '../../book/book.service';
import {Member} from '../../member/member.model';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-lending-edit',
  templateUrl: './lending-edit.component.html',
  styleUrls: ['./lending-edit.component.css']
})
export class LendingEditComponent implements OnInit {

  lendingForm: FormGroup;

  books: Book[];
  members: Member[];

 @Output() newBookLent = new EventEmitter<any>();

  // selectedBook: Book;
  // selectedMember: Member;

  constructor(private memberService: MemberService,
              private bookService: BookService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.lendingForm = this.fb.group({
      selectedMember: [null],
      selectedBook: [null]
    });
    this.memberService.getMember().subscribe(res =>{
      this.members = res;
    });
    this.bookService.getBooks(null).subscribe((res) => {
      this.books = res;
    });
  }

  onAddItem() {

    console.log(this.lendingForm.value);
    const form = this.lendingForm.value;
    console.log(form);
    form.selectedMember.borrowedBooksIds?.push(form.selectedBook);
    this.memberService.updateMember(form.selectedMember.id, form.selectedMember).subscribe(_ => {
      this.newBookLent.emit(_);
    });


  }

}
