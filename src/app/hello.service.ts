import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelloService {
  names = ['Landon', 'Tim'];

  constructor() {}
}
