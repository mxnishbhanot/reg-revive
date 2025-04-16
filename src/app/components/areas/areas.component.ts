import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AreaCardComponent } from '../area-card/area-card.component';
import { NgFor, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-areas',
  standalone: true,
  imports: [AreaCardComponent, NgFor],
  templateUrl: './areas.component.html',
  styleUrl: './areas.component.scss'
})
export class AreasComponent {
  areas: any[] = [];
  private map: any;

  constructor(
    private dataService: DataService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initMap();
    }
  }

  private async initMap(): Promise<void> {
    const L = await import('leaflet');

    this.map = L.map('map').setView([30.7400, 76.7700], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    const locations = [
      { title: 'Rupnagar', lat: 30.9665, lng: 76.5272 },
      { title: 'Kurali', lat: 30.8390, lng: 76.5796 },
      { title: 'Kharar', lat: 30.7463, lng: 76.7000 },
      { title: 'Mohali', lat: 30.7046, lng: 76.7179 },
    ];

    locations.forEach(loc => {
      L.marker([loc.lat, loc.lng])
        .addTo(this.map)
        .bindPopup(`<b>${loc.title}</b>`);
    });
  }

  ngOnInit() {
    this.dataService.getAreas().subscribe(data => {
      this.areas = data;
    });
  }
}
