import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../modules/shared/shared.module';

@Component({
  selector: 'app-testimonals',
  imports: [SharedModule],
  templateUrl: './testimonals.component.html',
  styleUrl: './testimonals.component.scss',
})
export class TestimonalsComponent implements OnInit {
  currentSlide = 0;

  testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'UI/UX Designer',
      company: 'TechCorp Solutions',
      location: 'Bangalore',
      avatar: 'PS',
      rating: 5,
      text: 'Kisstech Academy completely transformed my career...',
      course: 'UI/UX Design',
      salary: '₹8 LPA',
      color: 'bg-gradient-purple',
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'Digital Marketing Specialist',
      company: 'Growth Marketing Inc',
      location: 'Mumbai',
      avatar: 'RK',
      rating: 5,
      text: 'The digital marketing course exceeded my expectations...',
      course: 'Digital Marketing',
      salary: '₹6.5 LPA',
      color: 'bg-gradient-blue',
    },
    // Add the rest of the testimonials here...
  ];

  ngOnInit() {}
}
