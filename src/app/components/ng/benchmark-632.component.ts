
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-632',
    template: `<div class="benchmark-component">
    <h3>Component 632</h3>
    <button type="button" (click)="increment632()">
      Count {{ count632() }}
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
  export class BenchmarkNg632 {
    count632 = signal(0);

    increment632() {
      this.count632.update((count) => count + 1);
    }
  }