import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css']
})
export class ActionButtonComponent implements OnInit {

  @Input() icon = faCoffee;
  @Input() btnClass: string = 'btn-info';
  @Input() text: string = '';
  @Output() clicked: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDataClicked(): void {
    this.clicked.emit(true);
  }

}
