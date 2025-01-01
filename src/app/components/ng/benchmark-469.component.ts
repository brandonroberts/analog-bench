
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-469',
    template: `<div class="benchmark-component">
    <h3>Component 469</h3>
    <button type="button" (click)="increment469()">
      Count {{ count469() }}
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
  export class BenchmarkNg469 {
    count469 = signal(0);

    increment469() {
      this.count469.update((count) => count + 1);
    }
  }