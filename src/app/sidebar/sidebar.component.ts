import { Component } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(public auth: AuthService, private router: Router, public dialog: MatDialog){}

  opened = false;

  toggleSidebar() {
    this.opened = !this.opened;
  }

  signOut() {
    this.auth.logOut();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '310px',
      data: 'Are you sure you want to log out?',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.router.navigate(['/']);
      }
    });
  }

}
