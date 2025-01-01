
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-750',
    template: `<div class="benchmark-component">
    <h3>Component 750</h3>
    <button type="button" (click)="increment750()">
      Count {{ count750() }}
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
  export class BenchmarkNg750 {
    count750 = signal(0);

    increment750() {
      this.count750.update((count) => count + 1);
    }
  }