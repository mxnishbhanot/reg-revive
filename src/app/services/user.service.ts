import { isPlatformServer } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

export interface User {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getReviews(): Observable<any[]> {
    return this.http.get<any[]>('/assets/data/reviews.json');
  }

  getServicedPcs(): Observable<any[]> {
    return this.http.get<any[]>('/assets/data/serviced-pcs.json');
  }

  getAreas(): Observable<string[]> {
    return this.http.get<string[]>('/assets/data/areas.json');
  }

  getPlans(): Observable<string[]> {
    return this.http.get<string[]>('/assets/data/plans.json');
  }
}
