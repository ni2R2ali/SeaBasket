import { Component } from '@angular/core';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(public auth: AuthService){}

  opened = false;

  toggleSidebar() {
    this.opened = !this.opened;
  }

  signOut() {
    this.auth.logOut();
  }

}
