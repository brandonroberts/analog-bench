
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-348',
    template: `<div class="benchmark-component">
    <h3>Component 348</h3>
    <button type="button" (click)="increment348()">
      Count {{ count348() }}
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
  export class BenchmarkNg348 {
    count348 = signal(0);

    increment348() {
      this.count348.update((count) => count + 1);
    }
  }