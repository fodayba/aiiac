import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

interface ProjectCategory {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class ProjectsComponent {
  categories: ProjectCategory[] = [
    {
      id: 'commercial',
      title: 'Commercial Building Projects',
      description: 'Office complexes, retail spaces, and industrial facilities',
      imageUrl: '/assets/images/projects/commercial.jpg'
    },
    {
      id: 'residential',
      title: 'Residential Building Projects',
      description: 'Apartments, housing developments, and residential complexes',
      imageUrl: '/assets/images/projects/residential.jpg'
    },
    {
      id: 'mining',
      title: 'Mining Support Engineering Projects',
      description: 'Mining infrastructure and support facilities',
      imageUrl: '/assets/images/projects/mining.jpg'
    },
    {
      id: 'power',
      title: 'Power Generation Projects',
      description: 'Energy infrastructure and power generation facilities',
      imageUrl: '/assets/images/projects/power.jpg'
    },
    {
      id: 'piping',
      title: 'Piping Projects',
      description: 'Industrial piping systems and infrastructure',
      imageUrl: '/assets/images/projects/piping.jpg'
    },
    {
      id: 'steel',
      title: 'Steel Structure Fabrication & Erection',
      description: 'Structural steel works and fabrication projects',
      imageUrl: '/assets/images/projects/steel.jpg'
    }
  ];
}
