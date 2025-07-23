import { Component } from '@angular/core';
import { SharedModule } from '../modules/shared/shared.module';

@Component({
  selector: 'app-header-nav',
  imports: [SharedModule],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.scss'
})
export class HeaderNavComponent {
  navItems = ['Home', 'About', 'Courses', 'Categories', 'Testimonials', 'Events', 'Contact']

  scrollTo(item: any) {

  }
}
