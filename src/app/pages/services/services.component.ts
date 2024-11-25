import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Service {
  id: string;
  title: string;
  shortDescription: string;
  imageUrl: string;
}

interface ProcessStep {
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html'
})
export class ServicesComponent {
  services = [
    {
      id: 'civil-engineering',
      title: 'Civil Engineering',
      shortDescription: 'Infrastructure development and structural engineering solutions.',
      imageUrl: 'assets/images/services/civil-engineering.jpg'
    },
    {
      id: 'construction-management',
      title: 'Construction Management',
      shortDescription: 'End-to-end project delivery and site supervision.',
      imageUrl: 'assets/images/services/construction-management.jpg'
    },
    {
      id: 'environmental',
      title: 'Environmental Services',
      shortDescription: 'Sustainable solutions and environmental impact assessments.',
      imageUrl: 'assets/images/services/environmental.jpg'
    },
    // Add more services...
  ];

  capabilities = [
    {
      icon: 'bi bi-building-gear',
      title: 'Project Management',
      description: 'Comprehensive project planning, execution, and monitoring services.'
    },
    {
      icon: 'bi bi-gear-wide-connected',
      title: 'Technical Consulting',
      description: 'Expert advice and solutions for complex engineering challenges.'
    },
    {
      icon: 'bi bi-clipboard-data',
      title: 'Quality Assurance',
      description: 'Rigorous quality control and compliance monitoring.'
    },
    // Add more capabilities...
  ];

  processSteps: ProcessStep[] = [
    {
      title: 'Initial Consultation',
      description: 'Understanding project requirements and objectives'
    },
    {
      title: 'Design & Planning',
      description: 'Detailed engineering design and project planning'
    },
    {
      title: 'Implementation',
      description: 'Expert execution with quality control measures'
    },
    {
      title: 'Project Delivery',
      description: 'Final testing and handover to client'
    }
  ];

  statistics = [
    { value: '150+', label: 'Projects Completed' },
    { value: '10+', label: 'Years Experience' },
    { value: '98%', label: 'Client Satisfaction' }
  ];

  expertiseList = [
    {
      title: 'Technical Expertise',
      description: 'Industry-leading technical knowledge and innovative solutions'
    },
    // Add more expertise items as needed
  ];
}
