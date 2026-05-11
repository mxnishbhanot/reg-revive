import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LeadNotificationService } from '../../../services/lead-notification.service';

@Component({
  selector: 'app-booking-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './booking-modal.component.html',
  styleUrl: './booking-modal.component.scss',
})
export class BookingModalComponent implements OnChanges {
  constructor(private readonly leadNotification: LeadNotificationService) {}

  @Input() show = false;
  @Output() close = new EventEmitter<void>();

  bookingData = {
    fullName: '',
    email: '',
    phone: '',
    serviceType: '',
  };

  formSubmitted = false;
  submitting = false;
  submitError: string | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['show']?.currentValue === true) {
      this.submitError = null;
    }
  }

  async submitBooking() {
    if (!this.validateModal()) {
      return;
    }

    const serviceMap: Record<string, string> = {
      basic: 'Basic Refresh',
      standard: 'Deep Dive',
      pro: 'Ultimate ProCare',
    };

    const message = `
New Rig Revive Lead (booking)

Name: ${this.bookingData.fullName}
Email: ${this.bookingData.email}
Phone: ${this.bookingData.phone}
Service: ${serviceMap[this.bookingData.serviceType] ?? this.bookingData.serviceType}
`.trim();

    this.submitting = true;
    this.submitError = null;

    const result = await this.leadNotification.submitLead(message, {
      name: this.bookingData.fullName.trim(),
      email: this.bookingData.email.trim(),
    });

    this.submitting = false;

    if (result.ok) {
      this.formSubmitted = true;
      setTimeout(() => {
        this.formSubmitted = false;
        this.resetForm();
        this.close.emit();
      }, 2000);
    } else {
      this.submitError = result.error ?? 'Something went wrong.';
    }
  }

  validateModal(): boolean {
    return (
      this.bookingData.fullName.trim().length > 0 &&
      this.bookingData.email.trim().length > 0 &&
      this.bookingData.phone.trim().length > 0 &&
      this.bookingData.serviceType.trim().length > 0
    );
  }

  resetForm() {
    this.bookingData = {
      fullName: '',
      email: '',
      phone: '',
      serviceType: '',
    };
    this.submitError = null;
  }
}
