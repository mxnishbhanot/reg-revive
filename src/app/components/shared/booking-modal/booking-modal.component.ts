import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking-modal',
  imports: [CommonModule, FormsModule],
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
    if (!this.validateModal()) {
      return;
    }

    const serviceMap: any = {
      basic: 'Basic Refresh',
      standard: 'Deep Dive',
      pro: 'Ultimate ProCare'
    };

    const message = `
🚀 *New Rig Revive Lead*

👤 Name: ${this.bookingData.fullName}
📧 Email: ${this.bookingData.email}
📞 Phone: ${this.bookingData.phone}
🛠 Service: ${serviceMap[this.bookingData.serviceType]}
`;

    const encodedMessage = encodeURIComponent(message.trim());
    const whatsappNumber = '917986495947';

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Optional UX feedback
    this.formSubmitted = true;

    setTimeout(() => {
      this.formSubmitted = false;
      this.resetForm();
      this.close.emit();
    }, 1000);
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
