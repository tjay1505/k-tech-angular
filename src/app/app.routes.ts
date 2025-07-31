import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PolicyViewerComponent } from './policy-viewer/policy-viewer.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'privacy-policy/:type', component: PolicyViewerComponent },
];
