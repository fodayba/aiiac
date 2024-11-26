import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SEOService } from '../../services/seo.service';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
}

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss'],
  imports: [CommonModule, RouterLink],
  standalone: true
})
export class CareersComponent {
  openPositions: JobPosition[] = [
    {
      id: 'senior-civil-engineer',
      title: 'Senior Civil Engineer',
      department: 'Engineering',
      location: 'Monrovia, Liberia',
      type: 'Full-time'
    },
    {
      id: 'mechanical-engineer',
      title: 'Mechanical Engineer',
      department: 'Engineering',
      location: 'Freetown, Sierra Leone',
      type: 'Full-time'
    },
    {
      id: 'project-manager',
      title: 'Project Manager',
      department: 'Project Management',
      location: 'Monrovia, Liberia',
      type: 'Full-time'
    }
  ];
} 