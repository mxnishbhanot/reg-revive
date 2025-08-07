import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BookingModalComponent } from '../shared/booking-modal/booking-modal.component';

@Component({
  selector: 'app-service-card',
  imports: [CommonModule, BookingModalComponent],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
  @Input() service: any;
  isModalOpen = false;
  selectedService: any = null;
  constructor() {

  }

  openModal(service: any) {
    this.selectedService = service;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
