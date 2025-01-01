
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-728',
    template: `<div class="benchmark-component">
    <h3>Component 728</h3>
    <button type="button" (click)="increment728()">
      Count {{ count728() }}
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
  export class BenchmarkNg728 {
    count728 = signal(0);

    increment728() {
      this.count728.update((count) => count + 1);
    }
  }