import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CoreValue {
  icon: string;
  title: string;
  description: string;
}

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  position: string;
  imageUrl: string;
  socials: {
    icon: string;
    link: string;
  }[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  coreValues: CoreValue[] = [
    {
      icon: 'bi bi-shield-check',
      title: 'Quality Excellence',
      description: 'Delivering the highest standards in engineering solutions and project execution.'
    },
    {
      icon: 'bi bi-lightbulb',
      title: 'Innovation',
      description: 'Embracing new technologies and methodologies to solve complex challenges.'
    },
    {
      icon: 'bi bi-people',
      title: 'Client Focus',
      description: 'Building lasting partnerships through exceptional service and results.'
    }
  ];

  services: Service[] = [
    {
      icon: 'bi bi-building',
      title: 'Commercial Building',
      description: 'Comprehensive engineering solutions for commercial construction projects.'
    },
    {
      icon: 'bi bi-gear',
      title: 'Mining Support',
      description: 'Technical expertise for mining operations and infrastructure.'
    },
    {
      icon: 'bi bi-lightning',
      title: 'Power Generation',
      description: 'Engineering solutions for reliable power generation and distribution.'
    }
  ];

  teamMembers: TeamMember[] = [
    {
      name: 'John Doe',
      position: 'Chief Executive Officer',
      imageUrl: 'assets/images/team/ceo.jpg',
      socials: [
        { icon: 'bi bi-linkedin', link: '#' },
        { icon: 'bi bi-twitter', link: '#' }
      ]
    }
    // Add more team members
  ];

  certifications = [
    {
      name: 'ISO 9001:2015',
      imageUrl: 'assets/images/certifications/iso-9001.png'
    },
    // Add other certifications
  ];

  timeline = [
    {
      year: '2024',
      title: 'Expanding Operations',
      description: 'Continued growth with major projects across West Africa and expanded service offerings.'
    },
    {
      year: '2020',
      title: 'ISO Certification',
      description: 'Achieved ISO 9001:2015 certification, demonstrating our commitment to quality management systems.'
    },
    {
      year: '2018',
      title: 'Regional Expansion',
      description: 'Extended operations to neighboring countries in West Africa, establishing a strong regional presence.'
    },
    {
      year: '2015',
      title: 'Major Projects Milestone',
      description: 'Successfully completed several landmark engineering projects in Sierra Leone.'
    },
    {
      year: '2013',
      title: 'Company Founded',
      description: 'AIIAC Engineering was established in Sierra Leone, focusing on providing quality engineering solutions.'
    },
    {
      year: '2010',
      title: 'Initial Concept',
      description: 'The foundation was laid with initial planning and market research in West African engineering sector.'
    }
  ];
}
