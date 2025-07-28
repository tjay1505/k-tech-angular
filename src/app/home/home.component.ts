import { Component } from '@angular/core';
import { HeaderNavComponent } from "../header-nav/header-nav.component";
import { SharedModule } from '../modules/shared/shared.module';
import { LandingComponent } from "../landing/landing.component";
import { AboutComponent } from "../about/about.component";
import { AcademyComponent } from "../academy/academy.component";
import { LearningPathComponent } from "../learning-path/learning-path.component";
import { PopularCategoriesComponent } from "../popular-categories/popular-categories.component";
import { BootcampsComponent } from "../bootcamps/bootcamps.component";

@Component({
  selector: 'app-home',
  imports: [
    HeaderNavComponent,
    BootcampsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
