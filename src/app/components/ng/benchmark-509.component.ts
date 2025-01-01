
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-509',
    template: `<div class="benchmark-component">
    <h3>Component 509</h3>
    <button type="button" (click)="increment509()">
      Count {{ count509() }}
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
  export class BenchmarkNg509 {
    count509 = signal(0);

    increment509() {
      this.count509.update((count) => count + 1);
    }
  }