import { Component } from '@angular/core';
import { ServiceCardComponent } from '../service-card/service-card.component';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [ServiceCardComponent, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getServices().subscribe(data => {
      console.log(data);
      
      this.services = data;
    });
  }
}
