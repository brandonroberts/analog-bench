
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-453',
    template: `<div class="benchmark-component">
    <h3>Component 453</h3>
    <button type="button" (click)="increment453()">
      Count {{ count453() }}
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
  export class BenchmarkNg453 {
    count453 = signal(0);

    increment453() {
      this.count453.update((count) => count + 1);
    }
  }