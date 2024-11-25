import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      try {
        // Add your form submission logic here
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.contactForm.reset();
        alert('Message sent successfully!');
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Error sending message. Please try again.');
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}
