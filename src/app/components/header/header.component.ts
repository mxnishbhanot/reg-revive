import { Component } from '@angular/core';
import { BookingModalComponent } from '../shared/booking-modal/booking-modal.component';

@Component({
  selector: 'app-header',
  imports: [BookingModalComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen = false;
  showModal = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
