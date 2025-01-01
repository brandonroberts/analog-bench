
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-359',
    template: `<div class="benchmark-component">
    <h3>Component 359</h3>
    <button type="button" (click)="increment359()">
      Count {{ count359() }}
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
  export class BenchmarkNg359 {
    count359 = signal(0);

    increment359() {
      this.count359.update((count) => count + 1);
    }
  }