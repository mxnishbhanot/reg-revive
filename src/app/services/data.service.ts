// src/app/services/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getServices(): Observable<any> {
    return this.http.get('/assets/data/services.json');
  }

  getAreas(): Observable<any> {
    return this.http.get('/assets/data/areas.json');
  }

  getTestimonials(): Observable<any> {
    return this.http.get('/assets/data/testimonials.json');
  }
}