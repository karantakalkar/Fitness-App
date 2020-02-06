/** Angular Imports */
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output() closeSidenav = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {}

  /**
   * Emits event listener.
   */
  onClose(){
    this.closeSidenav.emit();
  }
}
