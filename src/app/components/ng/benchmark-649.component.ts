
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-649',
    template: `<div class="benchmark-component">
    <h3>Component 649</h3>
    <button type="button" (click)="increment649()">
      Count {{ count649() }}
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
  export class BenchmarkNg649 {
    count649 = signal(0);

    increment649() {
      this.count649.update((count) => count + 1);
    }
  }