import { Component } from '@angular/core';
import { StepComponent } from '../step/step.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-process',
  imports: [StepComponent, NgFor],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss'
})
export class ProcessComponent {
  steps = [
    { number: 1, image: '/assets/images/laptop.png', title: 'Book Online', description: 'Schedule your PC cleaning service through our website or WhatsApp.' },
    { number: 2, image: '/assets/images/pic-parcel.png', title: 'We Pick Up', description: 'We’ll collect your PC on any weekday (Monday–Friday) at your convenience.' },
    { number: 3, image: '/assets/images/clean-sys.png', title: 'Expert Cleaning', description: 'Your PC is professionally cleaned at our facility in Ropar.' },
    { number: 4, image: '/assets/images/delivery.png', title: 'Return Delivery', description: 'We return your freshly cleaned PC within 1–2 days after pickup.' }
  ];
}
