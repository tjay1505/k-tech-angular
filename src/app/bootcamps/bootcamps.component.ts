import { Component } from '@angular/core';
import { SharedModule } from '../modules/shared/shared.module';

@Component({
  selector: 'app-bootcamps',
  imports: [SharedModule],
  templateUrl: './bootcamps.component.html',
  styleUrl: './bootcamps.component.scss',
})
export class BootcampsComponent {
  bootCampAry = [
    { course: 'UI/UX Design', price: '₹599' },
    { course: 'Digital Marketing', price: '₹599' },
    { course: 'Video Editing', price: '₹599' },
    { course: 'Frontend Development', price: '₹599' },
    { course: 'Generative AI', price: '₹599' },
  ];

  goToContact() {
    let el = document.getElementById('Contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
