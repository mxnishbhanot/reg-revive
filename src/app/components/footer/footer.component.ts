import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LeadNotificationService } from '../../services/lead-notification.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(private readonly leadNotification: LeadNotificationService) {}

  formData = {
    name: '',
    email: '',
    phone: '',
    service: '',
  };

  submitting = false;
  feedback: { kind: 'success' | 'error'; text: string } | null = null;

  async onSubmit() {
    if (
      !this.formData.name.trim() ||
      !this.formData.email.trim() ||
      !this.formData.phone.trim() ||
      !this.formData.service.trim()
    ) {
      return;
    }

    const serviceMap: Record<string, string> = {
      basic: 'Basic Refresh',
      standard: 'Deep Dive',
      pro: 'Ultimate ProCare',
    };

    const message = `
📩 New Rig Revive Lead (Footer)

Name: ${this.formData.name}
Email: ${this.formData.email}
Phone: ${this.formData.phone}
Service: ${serviceMap[this.formData.service] ?? this.formData.service}
`.trim();

    this.submitting = true;
    this.feedback = null;

    const result = await this.leadNotification.submitLead(message, {
      name: this.formData.name.trim(),
      email: this.formData.email.trim(),
    });

    this.submitting = false;

    if (result.ok) {
      this.feedback = { kind: 'success', text: 'Request sent! We will get back to you soon.' };
      this.formData = {
        name: '',
        email: '',
        phone: '',
        service: '',
      };
    } else {
      this.feedback = { kind: 'error', text: result.error ?? 'Something went wrong.' };
    }
  }
}
