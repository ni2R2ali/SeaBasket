import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import { ShoppingCartService } from '../Service/shopping-cart.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public searchTerm: string = '';
  authService: any;

  constructor(
    public shoppingCart: ShoppingCartService,
    public auth: AuthService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  signOut() {
    this.auth.logOut();
  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    // console.log(this.searchTerm);
    this.shoppingCart.search.next(this.searchTerm);
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
