import { Component } from '@angular/core';
import { HeaderNavComponent } from "../header-nav/header-nav.component";
import { SharedModule } from '../modules/shared/shared.module';
import { LandingComponent } from "../landing/landing.component";

@Component({
  selector: 'app-home',
  imports: [
    HeaderNavComponent,
    SharedModule,
    LandingComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
