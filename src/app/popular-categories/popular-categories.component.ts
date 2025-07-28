import { Component } from '@angular/core';
import { SharedModule } from '../modules/shared/shared.module';

@Component({
  selector: 'app-popular-categories',
  imports: [SharedModule],
  templateUrl: './popular-categories.component.html',
  styleUrl: './popular-categories.component.scss'
})
export class PopularCategoriesComponent {
  popularCatAry = [
    {
      tittle: 'UI/UX Design + Frontend Course',
      fee: '₹ 45,000',
      duration: '5 Months',
      modules: [
        'Wireframing & Prototyping (Figma, Adobe XD)',
        'User Research & Personas',
        'Design Thinking Process',
        'Responsive UI Design (Mobile + Web)',
        'Interaction Design & Microinteractions'
      ],
      newBtn: null,
      tip: ['AI UI Tools', 'Voice Interface Design (VUI)'],
      borderClr: 'rgba(255, 68, 199, 1)',
      iconbg: 'rgba(255, 205, 251, 0.45)',
      icons: ['fa-solid', 'fa-palette']
    },
    {
      tittle: 'Digital Marketing',
      fee: '₹ 30,000',
      duration: '3-4 Months',
      modules: [
        'Social Media Marketing (Instagram, YouTube, LinkedIn)',
        'SEO & Keyword Optimization',
        'Google Ads & Meta Ads',
        'AI Content Creation (ChatGPT, Jasper)',
        'Email + WhatsApp Marketing Automation',
        'Google Analytics & Tag Manager'
      ],
      newBtn: null,
      tip: ['AI-Powered Reels & Short-form Videos'],
      borderClr: 'rgba(49, 162, 255, 1)',
      iconbg: 'rgba(205, 235, 255, 0.34)',
      icons: ['fa-solid', 'fa-arrow-up-right-dots']
    },
    {
      tittle: 'Java Fullstack Development',
      fee: '₹50,000',
      duration: '5 Months',
      modules: [
        'Core Java + OOPs',
        'Spring Boot + REST API',
        'Frontend: React/Angular',
        'Database: MySQL/PostgreSQL',
        'Git, GitHub, CI/CD Pipelines',
        'Fullstack Live Project'
      ],
      newBtn: '🔥 Bonus: Microservices + Docker',
      tip: ['Microservices + Docker (Intro)'],
      borderClr: 'rgba(32, 167, 28, 1)',
      iconbg: 'rgba(94, 255, 88, 0.29)',
      icons: ['fa-solid', 'fa-code']
    },
    {
      tittle: 'Video Editing Masterclass',
      fee: '₹60,000',
      duration: '5 Months',
      modules: [
        'Final Cut Pro (FCP)',
        'Adobe Premiere Pro',
        'DaVinci Resolve',
        'Adobe After Effects',
        'Motion Graphics & Editing Workflows'
      ],
      newBtn: '🎬 Projects: Short Films, Reels, Event Edits',
      tip: ['Short Films, Reels, Event Edits'],
      borderClr: 'rgba(240, 108, 0, 1)',
      iconbg: 'rgba(255, 102, 0, 0.26)',
      icons: ['fa-solid', 'fa-video']
    },
    {
      tittle: 'Generative AI Course',
      fee: '₹35,000',
      duration: '3 Months',
      modules: [
        'ChatGPT, Claude, Gemini Overview',
        'Midjourney, DALL·E for Visuals',
        'GitHub Copilot, Replit for Code',
        'No-Code AI Workflows (Zapier, Notion AI)',
        'AI Tools for Content, Design, Development'
      ],
      newBtn: null,
      tip: ['Short Films, Reels, Event Edits'],
      borderClr: 'rgba(0, 196, 196, 1)',
      iconbg: 'rgba(0, 171, 214, 0.27)',
      icons: ['fa-solid', 'fa-brain']

    },
    {
      tittle: 'Prompt Engineering Course',
      fee: '₹60,000',
      duration: '4 Months',
      modules: [
        'Instructional, Zero-shot, Few-shot, Chain-of-thought prompts',
        'Prompt Optimization for ChatGPT, Claude, Gemini',
        'Visual Prompting: Midjourney, Runway ML',
        'Prompting for Developers (Copilot, Replit)',
        'Real Projects: Resume Writer, Landing Page Builder, Scripter',
        'Prompt Ethics & Model Safety'
      ],
      newBtn: '🧠 Future Skill: Multi-modal AI Prompting',
      tip: ['Multi-modal AI Prompting'],
      borderClr: 'rgba(204, 0, 255, 1)',
      iconbg: 'rgba(255, 0, 234, 0.19)',
      icons: ['fa-solid', 'fa-lightbulb']
    },
  ]
}
