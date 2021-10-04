import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faCoffee, faInfo, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-action-button-group',
  templateUrl: './action-button-group.component.html',
  styleUrls: ['./action-button-group.component.css']
})
export class ActionButtonGroupComponent implements OnInit {

  @Output() selectClick: EventEmitter<boolean> = new EventEmitter();
  @Output() updateClick: EventEmitter<boolean> = new EventEmitter();
  @Output() deleteClick: EventEmitter<boolean> = new EventEmitter();
  faInfo = faInfo;
  faEdit = faEdit;
  faTrash = faTrashAlt;
  
  constructor() { }

  ngOnInit(): void {
  }

  onSelectButtonClick(): void {
    this.selectClick.emit(true);
  }

  onUpdateButtonClick(): void {
    this.updateClick.emit(true);
  }

  onDeleteButtonClick(): void {
    this.deleteClick.emit(true);
  }

}
