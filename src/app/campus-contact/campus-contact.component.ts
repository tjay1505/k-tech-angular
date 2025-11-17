// import { Component, OnInit } from '@angular/core';
// import {
//   FormBuilder,
//   FormGroup,
//   ReactiveFormsModule,
//   Validators,
// } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { SharedModule } from 'primeng/api';

// @Component({
//   selector: 'app-contact',
//   imports: [SharedModule, ReactiveFormsModule],
//   templateUrl: './campus-contact.component.html',
//   styleUrl: './campus-contact.component.scss',
// })
// export class CampusContactComponent implements OnInit {
//   contactForm!: FormGroup;
//   loading = false;

//   constructor(private fb: FormBuilder, private http: HttpClient) {}

//   ngOnInit() {
//     this.contactForm = this.fb.group({
//       firstName: ['', Validators.required],
//       lastName: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       phone: ['', Validators.required],
//       course: ['', Validators.required],
//       message: [''],
//     });
//   }

//   sendMessage() {
//     if (this.contactForm.invalid) return;

//     this.loading = true;
//     const formData = this.contactForm.value;
//     console.log(formData); // Debug log

//     this.http.post('http://localhost:3000/send-email', formData).subscribe({
//       next: (res) => {
//         console.log('Email sent:', res);
//         this.loading = false;
//         this.contactForm.reset();
//       },
//       error: (err) => {
//         console.error('Email failed:', err);
//         this.loading = false;
//       },
//     });
//   }
// }

import { Component } from '@angular/core';
import { SharedModule } from '../modules/shared/shared.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-campus-contact',
  imports: [SharedModule, FormsModule],
  templateUrl: './campus-contact.component.html',
  styleUrl: './campus-contact.component.scss',
})
export class CampusContactComponent {
  constructor(
    private matsan: MatSnackBar,
    private http: HttpClient,
    private fb: FormBuilder
  ) {}

  // sendMessage() {
  //   this.matsan.open(`Will be contact soon`, 'Close', {
  //     duration: 3000,
  //     panelClass: ['custom-snackbar'],
  //     horizontalPosition: 'right',
  //     verticalPosition: 'bottom',
  //   });
  // }

  contactForm!: FormGroup;

  ngOnInit() {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      course: ['', Validators.required],
      message: [''],
    });
  }

  loading = false;

  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  };

  validateEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  validatePhone(phone: string): boolean {
    return /^[0-9]{10}$/.test(phone);
  }

  sendMessage() {
    if (this.contactForm.invalid) {
      this.matsan.open(`Please fill all required fields.`, 'Close', {
        duration: 3000,
        panelClass: ['custom-snackbar'],
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
      });

      return;
    }

    this.loading = true;
    const formData = this.contactForm.value;
    console.log(formData); // Debug log

    this.http
      //.post('https://node-mail-sender-three.vercel.app/send-mail', formData)
      .post('https://nodemailsender-eta.vercel.app/send-mail', formData)
      .subscribe({
        next: (res) => {
          console.log('Email sent:', res);
          this.loading = false;
          this.contactForm.reset();
          this.matsan.open(`We will be reaches you with in few hrs`, 'Close', {
            duration: 3000,
            panelClass: ['custom-snackbar'],
            horizontalPosition: 'right',
            verticalPosition: 'bottom',
          });
        },
        error: (err) => {
          console.error('Email failed:', err);
          this.loading = false;
        },
      });
  }

  // async sendMessage() {
  //   //const { firstName, lastName, email, phone, course } = this.formData;

  //   // Frontend validation
  //   // if (!firstName || !lastName || !email || !phone || !course) {
  //   //   // this.toastr.warning('Please fill all required fields.');
  //   //   this.matsan.open(`Please fill all required fields.`, 'Close', {
  //   //     duration: 3000,
  //   //     panelClass: ['custom-snackbar'],
  //   //     horizontalPosition: 'right',
  //   //     verticalPosition: 'bottom',
  //   //   });
  //   //   return;
  //   // }

  //   // if (!this.validateEmail(email)) {
  //   //   // this.toastr.warning('Invalid email format.');
  //   //   this.matsan.open(`Invalid email format.`, 'Close', {
  //   //     duration: 3000,
  //   //     panelClass: ['custom-snackbar'],
  //   //     horizontalPosition: 'right',
  //   //     verticalPosition: 'bottom',
  //   //   });
  //   //   return;
  //   // }

  //   // if (!this.validatePhone(phone)) {
  //   //   // this.toastr.warning('Phone must be 10 digits.');
  //   //   this.matsan.open(`Phone must be 10 digits.`, 'Close', {
  //   //     duration: 3000,
  //   //     panelClass: ['custom-snackbar'],
  //   //     horizontalPosition: 'right',
  //   //     verticalPosition: 'bottom',
  //   //   });
  //   //   return;
  //   // }

  //   this.loading = true;

  //   console.log(this.formData);

  //   try {
  //     const response = await this.http
  //       // .post('/api/send-email', this.formData)
  //       .post(
  //         // 'https://your-backend.up.railway.app/api/send-email',
  //         'http://localhost:5000/api/send-email',
  //         this.formData
  //       )
  //       .toPromise();
  //     // this.toastr.success('Message sent successfully!');
  //     this.matsan.open(`Message sent successfully!`, 'Close', {
  //       duration: 3000,
  //       panelClass: ['custom-snackbar'],
  //       horizontalPosition: 'right',
  //       verticalPosition: 'bottom',
  //     });
  //     // this.formData = {
  //     //   firstName: '',
  //     //   lastName: '',
  //     //   email: '',
  //     //   phone: '',
  //     //   course: '',
  //     //   message: '',
  //     // };
  //   } catch (err) {
  //     // this.toastr.error('Failed to send message. Try again.');
  //     this.matsan.open(`Failed to send message. Try again.`, 'Close', {
  //       duration: 3000,
  //       panelClass: ['custom-snackbar'],
  //       horizontalPosition: 'right',
  //       verticalPosition: 'bottom',
  //     });
  //   } finally {
  //     this.loading = false;
  //   }
  // }
}
