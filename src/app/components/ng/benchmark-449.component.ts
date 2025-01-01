
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-449',
    template: `<div class="benchmark-component">
    <h3>Component 449</h3>
    <button type="button" (click)="increment449()">
      Count {{ count449() }}
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
  export class BenchmarkNg449 {
    count449 = signal(0);

    increment449() {
      this.count449.update((count) => count + 1);
    }
  }