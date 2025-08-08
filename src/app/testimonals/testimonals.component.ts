import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../modules/shared/shared.module';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-testimonals',
  imports: [SharedModule, CarouselModule],
  templateUrl: './testimonals.component.html',
  styleUrl: './testimonals.component.scss',
})
export class TestimonalsComponent implements OnInit {
  currentSlide = 0;

  testimonials = [
    {
      id: 1,
      name: 'Priya Saravanan',
      role: 'UI/UX Designer',
      company: 'TechCorp Solutions',
      location: 'Bangalore',
      avatar: 'PS',
      rating: 5,
      text: 'Kisstech Academy completely transformed my career. The UI/UX program was comprehensive and the mentorship was invaluable.',
      course: 'UI/UX Design',
      salary: '₹8 LPA',
      color: 'rgba(255, 0, 0, 0.09)',
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'Digital Marketing Specialist',
      company: 'Growth Marketing Inc',
      location: 'Mumbai',
      avatar: 'RK',
      rating: 5,
      text: '"The digital marketing course exceeded my expectations. Real-world projects and industry insights made all the difference. I increased my salary by 150% after completing the program."',
      course: 'Digital Marketing',
      salary: '₹6.5 LPA',
      color: 'rgba(0, 255, 200, 0.11)',
    },
    {
      id: 3,
      name: 'Anitha R',
      role: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'Hyderabad',
      avatar: 'AR',
      rating: 5,
      text: '"From zero coding knowledge to landing a frontend developer role - Kisstech made it possible. The instructors are amazing and the curriculum is perfectly structured."',
      course: 'Frontend Development',
      salary: '₹7 LPA',
      color: 'rgba(0, 247, 255, 0.11)',
    },
    {
      id: 4,
      name: 'Vikram S',
      role: 'Product Manager',
      company: 'InnovateNow',
      location: 'Delhi',
      avatar: 'VS',
      rating: 5,
      text: '"The product management course gave me the strategic thinking and leadership skills I needed. The case studies and mentorship were exceptional."',
      course: 'Product Management',
      salary: '₹12 LPA',
      color: 'rgba(255, 0, 212, 0.11)',
    },
    {
      id: 5,
      name: 'Sneha Prakash',
      role: 'Data Analyst',
      company: 'DataDriven Co',
      location: 'Pune',
      avatar: 'SP',
      rating: 5,
      text: '"The data analytics program opened up a whole new career path for me. The hands-on approach and real datasets made learning engaging and practical."',
      course: 'Data Analystics',
      salary: '₹9 LPA',
      color: 'rgba(0, 81, 255, 0.11)',
    },
    {
      id: 6,
      name: 'Arjun M',
      role: 'Mobile App Designer',
      company: 'DataDriven Co',
      location: 'Chennai',
      avatar: 'AM',
      rating: 5,
      text: '"Learning mobile app design at Kisstech was the best decision I made. The portfolio I built during the course directly helped me get hired."',
      course: 'Mobile App Design',
      salary: '₹7.5 LPA',
      color: 'rgba(166, 255, 0, 0.11)',
    },
    // Add the rest of the testimonials here...
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  ngOnInit() {}
}
