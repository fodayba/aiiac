import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  contactForm: FormGroup;
  contactInfo = {
    email: 'info@aiiac.ltd',
    hours: 'Monday - Friday: 8:00 AM - 5:00 PM (GMT)',
    liberiaAddress: 'Congo Town, Tubman Boulevard, Monrovia, Liberia',
    liberiaPhone: '+231 XXX XXXX',
    socials: {
      linkedin: 'https://linkedin.com/company/aiiac',
      facebook: 'https://facebook.com/aiiac'
    }
  };
  isSubmitting = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      service: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Handle form submission
    }
  }
}
