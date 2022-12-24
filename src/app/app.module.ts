import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MemberComponent } from './member/member.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { MemberDetailComponent } from './member/member-detail/member-detail.component';
import { MemberItemComponent } from './member/member-list/member-item/member-item.component';
import { LendingListComponent } from './lending-list/lending-list.component';
import { LendingEditComponent } from './lending-list/lending-edit/lending-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { LendingListService } from './lending-list/lending-list.service';
import { AppRoutingModule } from './app-routing.module';
import { MemberStartComponent } from './member/member-start/member-start.component';
import { MemberEditComponent } from './member/member-edit/member-edit.component';
import { BookComponent } from './book/book/book.component';
import { BookListComponent } from './book/book/book-list/book-list.component';
import { BookItemComponent } from './book/book/book-list/book-item/book-item.component';
import { BookAddComponent } from './book/book/book-add/book-add.component';
import { BookStartComponent } from './book/book/book-start/book-start.component';
import {MemberService} from './member/member.service';
import {BookService} from './book/book.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MemberComponent,
    MemberListComponent,
    MemberDetailComponent,
    MemberItemComponent,
    LendingListComponent,
    LendingEditComponent,
    DropdownDirective,
    MemberStartComponent,
    MemberEditComponent,
    BookComponent,
    BookListComponent,
    BookItemComponent,
    BookAddComponent,
    BookStartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [LendingListService, MemberService, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
