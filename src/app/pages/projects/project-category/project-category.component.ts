import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  client: string;
  location: string;
  year: string;
}

@Component({
  selector: 'app-project-category',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-category.component.html'
})
export class ProjectCategoryComponent implements OnInit {
  category: string = '';
  projects: Project[] = [];
  categoryTitle: string = '';
  categoryDescription: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params['category'];
      this.loadCategoryDetails();
      this.loadProjects();
    });
  }

  private loadCategoryDetails() {
    const categoryMap: { [key: string]: { title: string, description: string } } = {
      'commercial': {
        title: 'Commercial Building Projects',
        description: 'Office complexes, retail spaces, and industrial facilities'
      },
      'residential': {
        title: 'Residential Building Projects',
        description: 'Apartments, housing developments, and residential complexes'
      },
      'mining': {
        title: 'Mining Support Engineering Projects',
        description: 'Mining infrastructure and support facilities'
      },
      'power': {
        title: 'Power Generation Projects',
        description: 'Energy infrastructure and power generation facilities'
      },
      'piping': {
        title: 'Piping Projects',
        description: 'Industrial piping systems and infrastructure'
      },
      'steel': {
        title: 'Steel Structure Fabrication & Erection',
        description: 'Structural steel works and fabrication projects'
      }
    };

    const categoryDetails = categoryMap[this.category] || { 
      title: 'Projects', 
      description: 'Our engineering projects' 
    };
    
    this.categoryTitle = categoryDetails.title;
    this.categoryDescription = categoryDetails.description;
  }

  private loadProjects() {
    // This would typically come from a service
    // For now, using mock data based on category
    this.projects = this.getMockProjects(this.category);
  }

  private getMockProjects(category: string): Project[] {
    const projectsByCategory: { [key: string]: Project[] } = {
      'commercial': [
        {
          title: 'Freetown Business Complex',
          description: 'Modern 5-story office complex with sustainable design features, including solar power integration and water recycling systems.',
          imageUrl: '/assets/images/projects/commercial/business-complex.jpg',
          client: 'Sierra Leone Commercial Bank',
          location: 'Freetown, Sierra Leone',
          year: '2023'
        },
        {
          title: 'Industrial Park Development',
          description: 'Development of a 10-hectare industrial park including warehouses, logistics facilities, and office spaces.',
          imageUrl: '/assets/images/projects/commercial/industrial-park.jpg',
          client: 'Freetown Industrial Authority',
          location: 'Freetown, Sierra Leone',
          year: '2022'
        }
      ],
      'residential': [
        {
          title: 'Hill Station Housing Development',
          description: 'Modern residential complex comprising 50 luxury apartments with integrated amenities.',
          imageUrl: '/assets/images/projects/residential/hill-station.jpg',
          client: 'Hill Station Development Ltd',
          location: 'Freetown, Sierra Leone',
          year: '2023'
        },
        {
          title: 'Congo Town Residences',
          description: 'Mixed-use residential development with 100 apartment units and commercial spaces.',
          imageUrl: '/assets/images/projects/residential/congo-town.jpg',
          client: 'Liberian Housing Authority',
          location: 'Monrovia, Liberia',
          year: '2022'
        }
      ],
      'mining': [
        {
          title: 'Tonkolili Iron Ore Processing Facility',
          description: 'Design and construction of mineral processing infrastructure including crushing and screening plants.',
          imageUrl: '/assets/images/projects/mining/processing.jpg',
          client: 'Tonkolili Iron Ore',
          location: 'Tonkolili, Sierra Leone',
          year: '2023'
        },
        {
          title: 'Mining Support Infrastructure',
          description: 'Development of support facilities including workshops, warehouses, and administrative buildings.',
          imageUrl: '/assets/images/projects/mining/support.jpg',
          client: 'New Liberty Gold Mine',
          location: 'Grand Cape Mount, Liberia',
          year: '2022'
        }
      ],
      'power': [
        {
          title: 'Western Area Power Station',
          description: 'Construction of a 20MW thermal power generation facility with distribution infrastructure.',
          imageUrl: '/assets/images/projects/power/thermal.jpg',
          client: 'EDSA',
          location: 'Freetown, Sierra Leone',
          year: '2023'
        },
        {
          title: 'Solar Power Integration Project',
          description: 'Implementation of 5MW solar power system with battery storage for industrial use.',
          imageUrl: '/assets/images/projects/power/solar.jpg',
          client: 'Liberia Electricity Corporation',
          location: 'Monrovia, Liberia',
          year: '2022'
        }
      ],
      'piping': [
        {
          title: 'Industrial Water Treatment System',
          description: 'Installation of comprehensive water treatment and distribution system for industrial use.',
          imageUrl: '/assets/images/projects/piping/water-treatment.jpg',
          client: 'Sierra Leone Brewery Limited',
          location: 'Wellington, Sierra Leone',
          year: '2023'
        },
        {
          title: 'Process Piping Installation',
          description: 'Design and installation of process piping systems for manufacturing facility.',
          imageUrl: '/assets/images/projects/piping/process.jpg',
          client: 'Monrovia Oil Refinery',
          location: 'Monrovia, Liberia',
          year: '2022'
        }
      ],
      'steel': [
        {
          title: 'Port Expansion Steel Structures',
          description: 'Fabrication and erection of steel structures for port expansion project.',
          imageUrl: '/assets/images/projects/steel/port.jpg',
          client: 'Sierra Leone Ports Authority',
          location: 'Freetown, Sierra Leone',
          year: '2023'
        },
        {
          title: 'Industrial Steel Buildings',
          description: 'Design, fabrication, and erection of steel buildings for industrial complex.',
          imageUrl: '/assets/images/projects/steel/industrial.jpg',
          client: 'Liberia Manufacturing Corp',
          location: 'Buchanan, Liberia',
          year: '2022'
        }
      ]
    };

    return projectsByCategory[category] || [];
  }
} 