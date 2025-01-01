
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-351',
    template: `<div class="benchmark-component">
    <h3>Component 351</h3>
    <button type="button" (click)="increment351()">
      Count {{ count351() }}
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
  export class BenchmarkNg351 {
    count351 = signal(0);

    increment351() {
      this.count351.update((count) => count + 1);
    }
  }