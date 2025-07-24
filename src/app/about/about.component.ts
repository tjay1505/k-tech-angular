import { Component } from '@angular/core';
import { SharedModule } from '../modules/shared/shared.module';

@Component({
  selector: 'app-about',
  imports: [SharedModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  aboutSecAry = [
    { icon: 'fa fa-user', count: '130+', label: 'Students Placed', color: 'lightblue' },
    { icon: 'fa fa-trophy', count: '95%', label: 'Placement Rate', color: 'lightgreen' },
    { icon: 'fa fa-clock', count: '6', label: 'Month Programs', color: 'purple' },
    { icon: 'fa fa-bullseye', count: '15+', label: 'Industry Partners', color: 'orange' }
  ]
}
