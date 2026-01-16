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
    if (
      !this.formData.name.trim() ||
      !this.formData.email.trim() ||
      !this.formData.phone.trim() ||
      !this.formData.service.trim()
    ) {
      return;
    }

    const serviceMap: any = {
      basic: 'Basic Refresh',
      standard: 'Deep Dive',
      pro: 'Ultimate ProCare'
    };

    const message = `
📩 *New Rig Revive Lead (Footer)*

👤 Name: ${this.formData.name}
📧 Email: ${this.formData.email}
📞 Phone: ${this.formData.phone}
🛠 Service: ${serviceMap[this.formData.service]}
`;

    const encodedMessage = encodeURIComponent(message.trim());
    const whatsappNumber = '917986495947'; // 👈 YOUR NUMBER

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    // Reset form after opening WhatsApp
    this.formData = {
      name: '',
      email: '',
      phone: '',
      service: ''
    };
  }
}
