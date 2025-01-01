
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-635',
    template: `<div class="benchmark-component">
    <h3>Component 635</h3>
    <button type="button" (click)="increment635()">
      Count {{ count635() }}
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
  export class BenchmarkNg635 {
    count635 = signal(0);

    increment635() {
      this.count635.update((count) => count + 1);
    }
  }