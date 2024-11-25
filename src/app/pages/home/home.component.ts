import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  coreServices = [
    {
      icon: 'bi bi-building',
      title: 'Civil Engineering',
      description: 'Structural designs, geotechnical surveying, and construction management'
    },
    {
      icon: 'bi bi-gear-wide-connected',
      title: 'Mechanical Engineering',
      description: 'Equipment installation, maintenance, and system optimization'
    },
    {
      icon: 'bi bi-tools',
      title: 'Mining Support',
      description: 'Comprehensive mining equipment maintenance and support services'
    },
    {
      icon: 'bi bi-lightning-charge',
      title: 'Power Generation',
      description: 'Thermal power plant maintenance and power system solutions'
    },
    {
      icon: 'bi bi-boxes',
      title: 'Steel Fabrication',
      description: 'Tank manufacturing, structural steel, and custom fabrication'
    },
    {
      icon: 'bi bi-diagram-3',
      title: 'Project Management',
      description: 'End-to-end project planning, execution, and monitoring'
    }
  ];

  industries = [
    {
      name: 'Mining',
      description: 'Comprehensive support for mining operations and infrastructure',
      image: 'assets/images/industries/mining.jpg'
    },
    {
      name: 'Power Generation',
      description: 'Thermal power plant maintenance and energy infrastructure',
      image: 'assets/images/industries/power.jpg'
    },
    {
      name: 'Construction',
      description: 'Civil works and infrastructure development',
      image: 'assets/images/industries/construction.jpg'
    },
    {
      name: 'Industrial',
      description: 'Manufacturing and processing facility solutions',
      image: 'assets/images/industries/industrial.jpg'
    },
    {
      name: 'Public Infrastructure',
      description: 'Government and public sector project expertise',
      image: 'assets/images/industries/public.jpg'
    },
    {
      name: 'Commercial',
      description: 'Commercial building and facility solutions',
      image: 'assets/images/industries/commercial.jpg'
    }
  ];

  clients = [
    {
      name: 'Mining Corp',
      logo: 'bi bi-building',
      description: 'Leading mining operations partner'
    },
    {
      name: 'Power Solutions',
      logo: 'bi bi-lightning-charge',
      description: 'Energy infrastructure specialist'
    },
    {
      name: 'Construction Plus',
      logo: 'bi bi-bricks',
      description: 'Major construction developer'
    },
    {
      name: 'Industrial Tech',
      logo: 'bi bi-gear-wide-connected',
      description: 'Industrial automation leader'
    },
    {
      name: 'Steel Works',
      logo: 'bi bi-boxes',
      description: 'Steel manufacturing expert'
    },
    {
      name: 'Energy Systems',
      logo: 'bi bi-plug',
      description: 'Renewable energy pioneer'
    }
  ];

  services = [
    {
      title: 'Civil Engineering',
      description: 'Comprehensive infrastructure development and construction services',
      icon: 'bi bi-building'
    },
    // Add more services...
  ];

  recentProposals = [
    {
      title: 'Mining Infrastructure Development',
      description: 'Proposed solution for sustainable mining operations',
      date: 'March 2024',
      status: 'In Progress',
      icon: 'bi bi-gear'
    },
    // Add more proposals...
  ];
}
