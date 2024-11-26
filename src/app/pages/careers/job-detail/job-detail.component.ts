import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './job-detail.component.html'
})
export class JobDetailComponent implements OnInit {
  jobId: string = '';
  applicationForm: FormGroup;
  
  job: {
    title: string;
    department: string;
    location: string;
    type: string;
    description: string;
    requirements: string[];
    responsibilities: string[];
    benefits: string[];
  } = {
    title: '',
    department: '',
    location: '',
    type: '',
    description: '',
    requirements: [],
    responsibilities: [],
    benefits: []
  };

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.applicationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      resume: [null, Validators.required],
      coverLetter: ['', Validators.required],
      linkedIn: [''],
      portfolio: ['']
    });
  }

  ngOnInit() {
    this.jobId = this.route.snapshot.paramMap.get('id') || '';
    this.loadJobDetails();
  }

  private loadJobDetails() {
    // In a real app, this would be an API call
    // For now, we'll use mock data
    this.job = {
      title: 'Senior Civil Engineer',
      department: 'Engineering',
      location: 'Monrovia, Liberia',
      type: 'Full-time',
      description: 'We are seeking an experienced Civil Engineer to join our team...',
      requirements: [
        "Bachelor's degree in Civil Engineering",
        '8+ years of experience in civil engineering',
        'Professional Engineering license',
        'Experience with AutoCAD and other design software'
      ],
      responsibilities: [
        'Lead engineering design projects',
        'Manage project teams and timelines',
        'Ensure compliance with local regulations',
        'Coordinate with contractors and stakeholders'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        'Professional development opportunities',
        'Relocation assistance'
      ]
    };
  }

  onSubmit() {
    if (this.applicationForm.valid) {
      console.log('Form submitted:', this.applicationForm.value);
      // Handle form submission
    }
  }
} 