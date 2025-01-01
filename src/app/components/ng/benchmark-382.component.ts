
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-382',
    template: `<div class="benchmark-component">
    <h3>Component 382</h3>
    <button type="button" (click)="increment382()">
      Count {{ count382() }}
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
  export class BenchmarkNg382 {
    count382 = signal(0);

    increment382() {
      this.count382.update((count) => count + 1);
    }
  }