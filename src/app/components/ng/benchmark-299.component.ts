
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-299',
    template: `<div class="benchmark-component">
    <h3>Component 299</h3>
    <button type="button" (click)="increment299()">
      Count {{ count299() }}
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
  export class BenchmarkNg299 {
    count299 = signal(0);

    increment299() {
      this.count299.update((count) => count + 1);
    }
  }