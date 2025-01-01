
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-353',
    template: `<div class="benchmark-component">
    <h3>Component 353</h3>
    <button type="button" (click)="increment353()">
      Count {{ count353() }}
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
  export class BenchmarkNg353 {
    count353 = signal(0);

    increment353() {
      this.count353.update((count) => count + 1);
    }
  }