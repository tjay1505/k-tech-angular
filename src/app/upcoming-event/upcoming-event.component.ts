import { Component } from '@angular/core';
import { SharedModule } from '../modules/shared/shared.module';

@Component({
  selector: 'app-upcoming-event',
  imports: [SharedModule],
  templateUrl: './upcoming-event.component.html',
  styleUrl: './upcoming-event.component.scss',
})
export class UpcomingEventComponent {
  upComeEvent = [
    {
      id: 1,
      tittle: 'UI/UX Design Bootcamp',
      subtitle: 'From Beginner to Job-Ready in 5 Days',
      text: 'Intensive hands-on bootcamp covering design thinking, wireframing, prototyping, and portfolio creation',
      sed: [
        { txt: 'Friday, August 22, 2025', icon: ['fa', 'fa-calendar'] },
        { txt: '2:00 PM - 4:00 PM (2 hours)', icon: ['fa', 'fa-clock'] },
        { txt: 'Virtual Event', icon: ['fa', 'fa-location-dot'] },
        { txt: '34 seats left of 100', icon: ['fa', 'fa-users'] },
      ],
      type: 'Hybrid',
      includes: [
        'Live Projects',
        'Portfolio Review',
        'Job Assistance',
        'Certificate',
      ],
      noprice: '₹15,000',
      borderClr: 'rgba(255, 68, 199, 1)',
    },
    {
      id: 2,
      tittle: 'Frontend Development Workshop',
      subtitle: 'Build Modern Web Apps with React',
      text: 'Hands-on workshop to build a complete web application using React, TypeScript, and modern tools',
      sed: [
        { txt: 'Friday, August 22, 2025', icon: ['fa', 'fa-calendar'] },
        { txt: '2:00 PM - 4:00 PM (2 hours)', icon: ['fa', 'fa-clock'] },
        { txt: 'Virtual Event', icon: ['fa', 'fa-location-dot'] },
        { txt: '34 seats left of 100', icon: ['fa', 'fa-users'] },
      ],
      type: 'Online',
      includes: [
        'Code Along',
        'Project Deployment',
        'Career Guidance',
        'GitHub Portfolio',
      ],
      noprice: '₹8,000',
      borderClr: 'rgba(68, 165, 255, 1)',

      instructor: {
        name: 'Arjun Patel',
        title: 'Senior Frontend Engineer at Flipkart',
      },
    },
    {
      id: 3,
      tittle: 'Digital Marketing Masterclass',
      subtitle: 'Advanced Strategies for 2025',
      text: 'Learn cutting-edge digital marketing techniques including AI-powered campaigns and advanced analytics',
      sed: [
        { txt: 'Friday, August 22, 2025', icon: ['fa', 'fa-calendar'] },
        { txt: '2:00 PM - 4:00 PM (2 hours)', icon: ['fa', 'fa-clock'] },
        { txt: 'Virtual Event', icon: ['fa', 'fa-location-dot'] },
        { txt: '34 seats left of 100', icon: ['fa', 'fa-users'] },
      ],
      type: 'Online',
      includes: [
        'Live Case Studies',
        'Q&A Session',
        'Resource Kit',
        'Recording',
      ],
      noprice: '₹5,000',
      borderClr: 'rgba(68, 255, 152, 1)',

      instructor: {
        name: 'Meera Krishnan',
        title: 'Growth Marketing Head at Zomato',
      },
    },
  ];

  webniarsAry = [
    {
      t1: 'Career in Tech: Roadmap 2025',
      t2: '8/5/2025',
      t3: '7:00 PM',
      t4: '500 registered',
      t5: 'Speaker: Industry Panel',
    },
    {
      t1: 'AI in Design: Future Trends',
      t2: '8/12/2025',
      t3: '6:30 PM',
      t4: '350 registered',
      t5: 'Speaker: Sarah Johnson',
    },
    {
      t1: 'Freelancing Success Stories',
      t2: '8/19/2025',
      t3: '8:00 PM',
      t4: '280 registered',
      t5: 'Speaker: Rahul Sharma',
    },
  ];
}
