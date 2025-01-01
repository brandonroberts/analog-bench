
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-282',
    template: `<div class="benchmark-component">
    <h3>Component 282</h3>
    <button type="button" (click)="increment282()">
      Count {{ count282() }}
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
  export class BenchmarkNg282 {
    count282 = signal(0);

    increment282() {
      this.count282.update((count) => count + 1);
    }
  }