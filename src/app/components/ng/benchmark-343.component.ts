
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-343',
    template: `<div class="benchmark-component">
    <h3>Component 343</h3>
    <button type="button" (click)="increment343()">
      Count {{ count343() }}
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
  export class BenchmarkNg343 {
    count343 = signal(0);

    increment343() {
      this.count343.update((count) => count + 1);
    }
  }