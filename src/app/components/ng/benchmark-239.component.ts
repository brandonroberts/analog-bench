
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-239',
    template: `<div class="benchmark-component">
    <h3>Component 239</h3>
    <button type="button" (click)="increment239()">
      Count {{ count239() }}
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
  export class BenchmarkNg239 {
    count239 = signal(0);

    increment239() {
      this.count239.update((count) => count + 1);
    }
  }