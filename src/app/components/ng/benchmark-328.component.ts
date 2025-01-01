
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-328',
    template: `<div class="benchmark-component">
    <h3>Component 328</h3>
    <button type="button" (click)="increment328()">
      Count {{ count328() }}
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
  export class BenchmarkNg328 {
    count328 = signal(0);

    increment328() {
      this.count328.update((count) => count + 1);
    }
  }