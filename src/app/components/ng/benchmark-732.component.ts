
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-732',
    template: `<div class="benchmark-component">
    <h3>Component 732</h3>
    <button type="button" (click)="increment732()">
      Count {{ count732() }}
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
  export class BenchmarkNg732 {
    count732 = signal(0);

    increment732() {
      this.count732.update((count) => count + 1);
    }
  }