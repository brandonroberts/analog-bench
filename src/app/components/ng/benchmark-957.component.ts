
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-957',
    template: `<div class="benchmark-component">
    <h3>Component 957</h3>
    <button type="button" (click)="increment957()">
      Count {{ count957() }}
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
  export class BenchmarkNg957 {
    count957 = signal(0);

    increment957() {
      this.count957.update((count) => count + 1);
    }
  }