import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getMessage(): string {
    return 'Angular app is running better than ever';
  }
}
