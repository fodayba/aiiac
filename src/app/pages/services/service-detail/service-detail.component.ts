import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';

interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
  processes: {
    title: string;
    description: string;
  }[];
  slug: string;
}

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './service-detail.component.html'
})
export class ServiceDetailComponent implements OnInit {
  service: ServiceDetail = {
    id: '',
    title: '',
    description: '',
    icon: '',
    features: [],
    benefits: [],
    processes: [],
    slug: ''
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const serviceId = this.route.snapshot.paramMap.get('id') || 'civil-engineering';
    this.service = this.getServiceDetails(serviceId);
  }

  private getServiceDetails(serviceId: string): ServiceDetail {
    const services = {
      'civil-engineering': {
        id: 'civil-engineering',
        title: 'Civil Engineering',
        description: 'Comprehensive civil engineering solutions for infrastructure development and construction projects.',
        icon: 'bi bi-building-gear',
        features: [
          'Structural Designs for Commercial and Industrial Buildings',
          'Highway and Bridge Design & Construction',
          'Services Engineering Integration',
          'Environmental and Social Impact Assessment Studies',
          'Construction Management and Supervision',
          'Quality Control and Assurance'
        ],
        benefits: [
          'Expert structural analysis ensuring safety and longevity',
          'Sustainable design practices reducing environmental impact',
          'Cost-effective solutions without compromising quality',
          'Compliance with international standards and regulations',
          'Integrated approach to project management'
        ],
        processes: [
          {
            title: 'Initial Assessment',
            description: 'Comprehensive site evaluation, requirement analysis, and feasibility studies'
          },
          {
            title: 'Design Development',
            description: 'Detailed engineering designs, structural calculations, and technical specifications'
          },
          {
            title: 'Project Planning',
            description: 'Resource allocation, timeline development, and risk assessment'
          },
          {
            title: 'Implementation',
            description: 'Construction supervision, quality control, and progress monitoring'
          }
        ],
        slug: 'civil-engineering'
      },

      'mechanical-engineering': {
        id: 'mechanical-engineering',
        title: 'Mechanical Engineering',
        description: 'Expert mechanical engineering services for industrial applications and infrastructure projects.',
        icon: 'bi bi-gear-wide-connected',
        features: [
          'Mechanical Structure Design and Installation',
          'Advanced Piping Systems',
          'Precision Welding Services',
          'Custom Fabrication Solutions',
          'Preventive Maintenance Programs'
        ],
        benefits: [
          'Improved operational efficiency',
          'Reduced maintenance costs',
          'Extended equipment lifecycle',
          'Enhanced safety standards',
          'Optimized performance metrics'
        ],
        processes: [
          {
            title: 'Technical Assessment',
            description: 'Evaluation of mechanical requirements and system specifications'
          },
          {
            title: 'Engineering Design',
            description: 'Detailed mechanical designs and system integration planning'
          },
          {
            title: 'Fabrication',
            description: 'Precision manufacturing and quality control processes'
          },
          {
            title: 'Installation & Testing',
            description: 'Professional installation, commissioning, and performance testing'
          }
        ],
        slug: 'mechanical-engineering'
      },

      'construction-management': {
        id: 'construction-management',
        title: 'Construction & Project Management',
        description: 'End-to-end project management and construction services for complex engineering projects.',
        icon: 'bi bi-clipboard-data',
        features: [
          'Comprehensive Feasibility Studies',
          'Detailed Project Planning',
          'Risk Management Analysis',
          'Control Document Preparation',
          'Resource Optimization',
          'Quality Management Systems'
        ],
        benefits: [
          'Streamlined project execution',
          'Effective risk mitigation',
          'Optimal resource utilization',
          'Timely project completion',
          'Budget optimization'
        ],
        processes: [
          {
            title: 'Project Initiation',
            description: 'Scope definition, stakeholder analysis, and initial planning'
          },
          {
            title: 'Planning & Design',
            description: 'Detailed project planning, resource allocation, and schedule development'
          },
          {
            title: 'Execution',
            description: 'Project implementation with continuous monitoring and control'
          },
          {
            title: 'Closure & Handover',
            description: 'Project completion, documentation, and client handover'
          }
        ],
        slug: 'construction-management'
      },

      'surveying': {
        id: 'surveying',
        title: 'Surveying Services',
        description: 'Professional surveying services for accurate land measurement and property assessment.',
        icon: 'bi bi-geo-alt',
        features: [
          'Geotechnical Surveys',
          'Land/Cadastral Surveying',
          'Quantity Surveying',
          'Asset Valuation',
          'Topographic Surveys',
          'Construction Surveys'
        ],
        benefits: [
          'Precise measurements and documentation',
          'Comprehensive property analysis',
          'Accurate cost estimations',
          'Legal compliance assurance',
          'Informed decision-making support'
        ],
        processes: [
          {
            title: 'Initial Consultation',
            description: 'Project requirements assessment and scope definition'
          },
          {
            title: 'Field Survey',
            description: 'On-site data collection and measurements'
          },
          {
            title: 'Analysis & Documentation',
            description: 'Data processing and detailed report preparation'
          },
          {
            title: 'Final Reporting',
            description: 'Comprehensive survey results and recommendations'
          }
        ],
        slug: 'surveying'
      },

      'piping': {
        id: 'piping',
        title: 'Piping Solutions',
        description: 'Specialized piping solutions for industrial and commercial applications.',
        icon: 'bi bi-diagram-3',
        features: [
          'Steel Piping Fabrication & Welding',
          'HDPE Piping Systems',
          'PVC/PPR Installation',
          'Quality Testing & Certification',
          'Maintenance Services'
        ],
        benefits: [
          'High-quality material selection',
          'Expert installation techniques',
          'Long-term durability',
          'Reduced maintenance requirements',
          'Compliance with industry standards'
        ],
        processes: [
          {
            title: 'System Design',
            description: 'Piping system design and material selection'
          },
          {
            title: 'Fabrication',
            description: 'Custom pipe fabrication and quality control'
          },
          {
            title: 'Installation',
            description: 'Professional installation and system integration'
          },
          {
            title: 'Testing',
            description: 'Pressure testing and system certification'
          }
        ],
        slug: 'piping'
      },

      'tank-manufacturing': {
        id: 'tank-manufacturing',
        title: 'Tank Manufacturing',
        description: 'Custom tank manufacturing solutions for various industrial storage needs.',
        icon: 'bi bi-fuel-pump',
        features: [
          'Storage Tank Fabrication',
          'Horizontal Tank Systems',
          'Non-Pressure Vessels',
          'Sphere Tank Construction',
          'Custom Hopper & Chute Design'
        ],
        benefits: [
          'Customized storage solutions',
          'High-quality materials',
          'Safety compliance',
          'Durability and reliability',
          'Expert installation service'
        ],
        processes: [
          {
            title: 'Design Phase',
            description: 'Custom tank design and engineering calculations'
          },
          {
            title: 'Material Selection',
            description: 'Quality material sourcing and verification'
          },
          {
            title: 'Fabrication',
            description: 'Precision manufacturing and quality control'
          },
          {
            title: 'Installation & Testing',
            description: 'Professional installation and safety certification'
          }
        ],
        slug: 'tank-manufacturing'
      },

      'power-generation': {
        id: 'power-generation',
        title: 'Power Generation',
        description: 'Comprehensive power generation solutions for industrial and utility applications.',
        icon: 'bi bi-lightning-charge',
        features: [
          'Thermal Power Plant Construction',
          'Plant Refurbishment Services',
          'Maintenance Programs',
          'Performance Optimization',
          'Emergency Repair Services'
        ],
        benefits: [
          'Increased operational efficiency',
          'Reduced downtime',
          'Improved plant reliability',
          'Cost-effective solutions',
          'Environmental compliance'
        ],
        processes: [
          {
            title: 'Assessment',
            description: 'Plant evaluation and requirement analysis'
          },
          {
            title: 'Engineering',
            description: 'Detailed design and planning'
          },
          {
            title: 'Construction/Refurbishment',
            description: 'Project execution and quality control'
          },
          {
            title: 'Commissioning',
            description: 'System testing and performance verification'
          }
        ],
        slug: 'power-generation'
      },

      'mining': {
        id: 'mining',
        title: 'Mining Services',
        description: 'Specialized mining services and maintenance solutions for the mining industry.',
        icon: 'bi bi-minecart-loaded',
        features: [
          'SMPP Project Implementation',
          'Plant Maintenance Services',
          'Pump Servicing',
          'Scrubber Relining',
          'Structure Maintenance',
          'Equipment Installation'
        ],
        benefits: [
          'Minimized operational downtime',
          'Enhanced safety standards',
          'Improved equipment reliability',
          'Cost-effective maintenance',
          'Expert technical support'
        ],
        processes: [
          {
            title: 'Site Assessment',
            description: 'Comprehensive evaluation of mining operations and requirements'
          },
          {
            title: 'Planning',
            description: 'Detailed maintenance and implementation planning'
          },
          {
            title: 'Execution',
            description: 'Professional service delivery and quality control'
          },
          {
            title: 'Monitoring',
            description: 'Ongoing performance monitoring and optimization'
          }
        ],
        slug: 'mining'
      }
    };

    return services[serviceId as keyof typeof services] || services['civil-engineering'];
  }
} 