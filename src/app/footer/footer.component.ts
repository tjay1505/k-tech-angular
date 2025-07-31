import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(private matsan: MatSnackBar, private router: Router) {}

  sendMessage() {
    this.matsan.open(`Will be contact soon`, 'Close', {
      duration: 3000,
      panelClass: ['custom-snackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
  }

  goto(item: any) {
    let el = document.getElementById(item);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  openPol(type: any) {
    this.router.navigate(['/privacy-policy', type]);
  }
}
