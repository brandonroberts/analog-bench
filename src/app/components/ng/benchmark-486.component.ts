
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-486',
    template: `<div class="benchmark-component">
    <h3>Component 486</h3>
    <button type="button" (click)="increment486()">
      Count {{ count486() }}
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
  export class BenchmarkNg486 {
    count486 = signal(0);

    increment486() {
      this.count486.update((count) => count + 1);
    }
  }