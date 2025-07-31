import { Component } from '@angular/core';
import { SharedModule } from '../modules/shared/shared.module';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-campus-contact',
  imports: [SharedModule],
  templateUrl: './campus-contact.component.html',
  styleUrl: './campus-contact.component.scss',
})
export class CampusContactComponent {
  constructor(private matsan: MatSnackBar) {}

  sendMessage() {
    this.matsan.open(`Will be contact soon`, 'Close', {
      duration: 3000,
      panelClass: ['custom-snackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
  }
}
