import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

import {Member} from '../../member.model';
import {MemberService} from '../../member.service';

@Component({
  selector: 'app-member-item',
  templateUrl: './member-item.component.html',
  styleUrls: ['./member-item.component.css']
})
export class MemberItemComponent implements OnInit {
  @Input() member: Member;
  @Input() index: number;

  @Output() memberDeleted: EventEmitter<any> = new EventEmitter<any>();

  constructor(private memberService: MemberService) {
  }

  ngOnInit() {
  }


  deleteMember(id) {
    this.memberService.deleteMember(id).subscribe(_ => this.memberDeleted.emit(id));

  }
}
