import { Component } from '@angular/core';
import { SharedModule } from '../modules/shared/shared.module';

@Component({
  selector: 'app-learning-path',
  imports: [SharedModule],
  templateUrl: './learning-path.component.html',
  styleUrl: './learning-path.component.scss',
})
export class LearningPathComponent {
  learnPathAry = [
    {
      tittle: 'UI/UX Design',
      subTittle:
        'Master user interface and experience design with industry-standard tools',
      week: '12 weeks',
      lvl: 'Beginner to Advanced',
      points: [
        'Figma & Adobe XD',
        'User Research',
        'Prototyping',
        'Design Systems',
      ],
      isPopular: true,
      borderClr: 'rgba(255, 68, 199, 1)',
      iconbg: 'rgba(255, 205, 251, 0.58)',
    },
    {
      tittle: 'Digital Marketing',
      subTittle:
        'Learn comprehensive digital marketing strategies and analytics',
      week: '10 weeks',
      lvl: 'Beginner to Intermediate',
      points: ['SEO/SEM', 'Social Media', 'Content Strategy', 'Analytics'],
      isPopular: false,
      borderClr: 'rgba(68, 165, 255, 1)',
      iconbg: 'rgba(134, 201, 255, 0.58)',
    },
    {
      tittle: 'Frontend Development',
      subTittle:
        'Build modern web applications with React and advanced JavaScript',
      week: '16 weeks',
      lvl: 'Intermediate',
      points: [
        'React/Next.js',
        'TypeScript',
        'CSS / Tailwind',
        'API Integration',
      ],
      isPopular: false,
      borderClr: 'rgba(68, 255, 152, 1)',
      iconbg: 'rgba(134, 255, 160, 0.58)',
    },
    {
      tittle: 'Mobile App Design',
      subTittle: 'Design beautiful and functional mobile applications',
      week: '8 weeks',
      lvl: 'Intermediate',
      points: [
        'iOS/Android Design',
        'Mobile UX',
        'App Prototyping',
        'User Testing',
      ],
      isPopular: false,
      borderClr: 'rgba(255, 168, 68, 1)',
      iconbg: 'rgba(255, 198, 134, 0.58)',
    },
    {
      tittle: 'Data Analytics',
      subTittle: 'Transform data into actionable insights for business growth',
      week: '14 weeks',
      lvl: 'Beginner to Advanced',
      points: [
        'Python/SQL',
        'Data Visualization',
        'Statistical Analysis',
        'Business Intelligence',
      ],
      isPopular: false,
      borderClr: 'rgba(0, 209, 164, 1)',
      iconbg: 'rgba(0, 161, 121, 0.49)',
    },
    {
      tittle: 'Product Management',
      subTittle: 'Lead product development from conception to launch',
      week: '12 weeks',
      lvl: 'Intermediate to Advanced',
      points: [
        'Product Strategy',
        'User Research',
        'Agile Methodology',
        'Stakeholder Management',
      ],
      isPopular: false,
      borderClr: 'rgba(0, 13, 202, 1)',
      iconbg: 'rgba(0, 24, 161, 0.49)',
    },
  ];

  goto() {
    let el = document.getElementById('Contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
