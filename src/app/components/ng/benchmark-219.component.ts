
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-219',
    template: `<div class="benchmark-component">
    <h3>Component 219</h3>
    <button type="button" (click)="increment219()">
      Count {{ count219() }}
    </button>
  </div>`,
  styles: `
  .benchmark-component {
    padding: 1rem;
    border: 1px solid #ccc;
    margin: 0.5rem;
    border-radius: 4px;
  }
  `,
    standalone: true,
  })
  export class BenchmarkNg219 {
    count219 = signal(0);

    increment219() {
      this.count219.update((count) => count + 1);
    }
  }