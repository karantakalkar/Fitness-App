/** Angular Imports */
import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs/Subscription'

import { AuthService } from '../../auth/auth.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth: boolean;
  authSubscription: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit(){
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  ngOnDestroy(){
    this.authSubscription.unsubscribe();
  }

  /**
   * Emits event listener.
   */
  toggleSidenav(){
    this.sidenavToggle.emit();
  }
}
