
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-31',
    template: `<div class="benchmark-component">
    <h3>Component 31</h3>
    <button type="button" (click)="increment31()">
      Count {{ count31() }}
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
  export class BenchmarkNg31 {
    count31 = signal(0);

    increment31() {
      this.count31.update((count) => count + 1);
    }
  }