import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

interface ProjectCategory {
  title: string;
  description: string;
  imageUrl: string;
  route: string;
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
      title: 'Commercial Building Projects',
      description: 'Office complexes, retail spaces, and industrial facilities',
      imageUrl: '/assets/images/projects/commercial.jpg',
      route: '/projects/commercial'
    },
    {
      title: 'Residential Building Projects',
      description: 'Apartments, housing developments, and residential complexes',
      imageUrl: '/assets/images/projects/residential.jpg',
      route: '/projects/residential'
    },
    {
      title: 'Mining Support Engineering Projects',
      description: 'Mining infrastructure and support facilities',
      imageUrl: '/assets/images/projects/mining.jpg',
      route: '/projects/mining'
    },
    {
      title: 'Power Generation Projects',
      description: 'Energy infrastructure and power generation facilities',
      imageUrl: '/assets/images/projects/power.jpg',
      route: '/projects/power'
    },
    {
      title: 'Piping Projects',
      description: 'Industrial piping systems and infrastructure',
      imageUrl: '/assets/images/projects/piping.jpg',
      route: '/projects/piping'
    },
    {
      title: 'Steel Structure Fabrication & Erection',
      description: 'Structural steel works and fabrication projects',
      imageUrl: '/assets/images/projects/steel.jpg',
      route: '/projects/steel'
    }
  ];
}
