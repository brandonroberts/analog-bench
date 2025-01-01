
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-498',
    template: `<div class="benchmark-component">
    <h3>Component 498</h3>
    <button type="button" (click)="increment498()">
      Count {{ count498() }}
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
  export class BenchmarkNg498 {
    count498 = signal(0);

    increment498() {
      this.count498.update((count) => count + 1);
    }
  }