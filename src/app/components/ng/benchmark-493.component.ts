
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-493',
    template: `<div class="benchmark-component">
    <h3>Component 493</h3>
    <button type="button" (click)="increment493()">
      Count {{ count493() }}
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
  export class BenchmarkNg493 {
    count493 = signal(0);

    increment493() {
      this.count493.update((count) => count + 1);
    }
  }