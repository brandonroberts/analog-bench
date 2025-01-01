
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1299',
    template: `<div class="benchmark-component">
    <h3>Component 1299</h3>
    <button type="button" (click)="increment1299()">
      Count {{ count1299() }}
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
  export class BenchmarkNg1299 {
    count1299 = signal(0);

    increment1299() {
      this.count1299.update((count) => count + 1);
    }
  }