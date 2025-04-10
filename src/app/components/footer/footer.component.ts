import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    service: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Add actual submission logic here (e.g., API call)
  }
}
