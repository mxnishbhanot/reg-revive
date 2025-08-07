import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking-modal',
  imports: [CommonModule,FormsModule],
  templateUrl: './booking-modal.component.html',
  styleUrl: './booking-modal.component.scss'
})
export class BookingModalComponent {
  @Input() show = false;
  @Output() close = new EventEmitter<void>();

  bookingData = {
    fullName: '',
    email: '',
    phone: '',
    serviceType: '',
    // date: '',
    // time: ''
  };

  formSubmitted = false;

  submitBooking() {
    this.formSubmitted = true;

    // Form validation would go here
    if (this.bookingData.fullName && this.bookingData.email &&
        this.bookingData.phone && this.bookingData.serviceType) {
      console.log('Booking submitted:', this.bookingData);

      // Reset form
      setTimeout(() => {
        this.formSubmitted = false;
        this.resetForm();
        this.close.emit();
      }, 1500);
    }
  }

  validateModal() {
    if (this.bookingData.fullName.trim().length === 0 || this.bookingData.email.trim().length === 0 ||
      this.bookingData.phone.trim().length === 0 || this.bookingData.serviceType.trim().length === 0) {
      return false
    }
    return true;
  }

  resetForm() {
    this.bookingData = {
      fullName: '',
      email: '',
      phone: '',
      serviceType: '',
      // date: '',
      // time: ''
    };
  }
}
