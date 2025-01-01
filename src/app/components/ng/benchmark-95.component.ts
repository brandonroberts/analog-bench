
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-95',
    template: `<div class="benchmark-component">
    <h3>Component 95</h3>
    <button type="button" (click)="increment95()">
      Count {{ count95() }}
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
  export class BenchmarkNg95 {
    count95 = signal(0);

    increment95() {
      this.count95.update((count) => count + 1);
    }
  }