import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberComponent } from './member/member.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { MemberStartComponent } from './member/member-start/member-start.component';
import { MemberDetailComponent } from './member/member-detail/member-detail.component';
import { MemberEditComponent } from './member/member-edit/member-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/member', pathMatch: 'full' },
  { path: 'member', component: MemberComponent, children: [
    { path: '', component: MemberStartComponent },
    { path: 'new', component: MemberEditComponent },
    { path: ':id', component: MemberDetailComponent },
    { path: ':id/edit', component: MemberEditComponent },
  ] },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
