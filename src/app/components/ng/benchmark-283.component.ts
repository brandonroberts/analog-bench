
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-283',
    template: `<div class="benchmark-component">
    <h3>Component 283</h3>
    <button type="button" (click)="increment283()">
      Count {{ count283() }}
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
  export class BenchmarkNg283 {
    count283 = signal(0);

    increment283() {
      this.count283.update((count) => count + 1);
    }
  }