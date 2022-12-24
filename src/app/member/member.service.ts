import {EventEmitter, Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {Member} from './member.model';
import {Observable} from 'rxjs';

@Injectable()
export class MemberService {
  recipeSelected = new EventEmitter<any>();
  url = 'http://localhost:8080/v1/member';

  constructor(private http: HttpClient) {
  }

  createMember(member): Observable<any> {
    return this.http.post(this.url, member);
  }

  getMember(): Observable<Member[]> {
    return this.http.get<Member[]>(this.url);
  }

  updateMember(memberId, member): Observable<any> {
    return this.http.put(this.url + '/' + memberId, member);
  }
}
