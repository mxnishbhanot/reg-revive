import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AreaCardComponent } from '../area-card/area-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-areas',
  imports: [AreaCardComponent, NgFor],
  templateUrl: './areas.component.html',
  styleUrl: './areas.component.scss'
})
export class AreasComponent {
  areas: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAreas().subscribe(data => {
      this.areas = data;
    });
  }
}
