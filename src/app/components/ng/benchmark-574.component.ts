
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-574',
    template: `<div class="benchmark-component">
    <h3>Component 574</h3>
    <button type="button" (click)="increment574()">
      Count {{ count574() }}
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
  export class BenchmarkNg574 {
    count574 = signal(0);

    increment574() {
      this.count574.update((count) => count + 1);
    }
  }