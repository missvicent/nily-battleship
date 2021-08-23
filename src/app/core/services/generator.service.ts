import { Injectable } from '@angular/core';
import randomInteger from 'random-int';

@Injectable({
  providedIn: 'root',
})
export class GeneratorService {
  getLetter(value: number): string {
    return String.fromCharCode(97 + value);
  }

  selectRandomRow(): string {
    return String.fromCharCode(97 + Math.floor(Math.random() * 10));
  }

  selectRandomColumn(): number {
    return Math.floor(Math.random() * 10);
  }
}
