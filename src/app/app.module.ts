import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MemberComponent } from './member/member.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { MemberDetailComponent } from './member/member-detail/member-detail.component';
import { MemberItemComponent } from './member/member-list/member-item/member-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { MemberStartComponent } from './member/member-start/member-start.component';
import { MemberEditComponent } from './member/member-edit/member-edit.component';
import {BookEditComponent} from './book/book-edit/book-edit.component';
import {BookComponent} from './book/book.component';
import {BookListComponent} from './book/book-list/book-list.component';
import {BookDetailComponent} from './book/book-detail/book-detail.component';
import {BookItemComponent} from './book/book-list/book-item/book-item.component';
import {BookStartComponent} from './book/book-start/book-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MemberComponent,
    MemberListComponent,
    MemberDetailComponent,
    MemberItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    MemberStartComponent,
    MemberEditComponent,
    BookEditComponent,
    BookComponent,
    BookListComponent,
    BookDetailComponent,
    BookItemComponent,
    BookStartComponent,
    BookEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
