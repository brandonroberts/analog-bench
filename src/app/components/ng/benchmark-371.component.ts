
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-371',
    template: `<div class="benchmark-component">
    <h3>Component 371</h3>
    <button type="button" (click)="increment371()">
      Count {{ count371() }}
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
  export class BenchmarkNg371 {
    count371 = signal(0);

    increment371() {
      this.count371.update((count) => count + 1);
    }
  }