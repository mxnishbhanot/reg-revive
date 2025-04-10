import { Component } from '@angular/core';
import { TestimonialCardComponent } from '../testimonial-card/testimonial-card.component';
import { DataService } from '../../services/data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  imports: [TestimonialCardComponent, NgFor],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getTestimonials().subscribe(data => {
      this.testimonials = data;
    });
  }
}
