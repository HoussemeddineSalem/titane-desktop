import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberComponent } from './member/member.component';
import { LendingListComponent } from './lending-list/lending-list.component';
import { MemberStartComponent } from './member/member-start/member-start.component';
import { MemberEditComponent } from './member/member-edit/member-edit.component';
import {BookComponent} from './book/book/book.component';
import {BookStartComponent} from './book/book/book-start/book-start.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/member', pathMatch: 'full' },
  { path: 'member', component: MemberComponent, children: [
    { path: '', component: MemberStartComponent },
    { path: 'new', component: MemberEditComponent },
    { path: ':id/edit', component: MemberEditComponent },
  ] },
  { path: 'book', component: BookComponent, children : [{
    path: '', component: BookStartComponent
    }] },
  { path: 'lending-list', component: LendingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
