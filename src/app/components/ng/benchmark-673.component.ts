
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-673',
    template: `<div class="benchmark-component">
    <h3>Component 673</h3>
    <button type="button" (click)="increment673()">
      Count {{ count673() }}
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
  export class BenchmarkNg673 {
    count673 = signal(0);

    increment673() {
      this.count673.update((count) => count + 1);
    }
  }