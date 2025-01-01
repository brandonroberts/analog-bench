
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-272',
    template: `<div class="benchmark-component">
    <h3>Component 272</h3>
    <button type="button" (click)="increment272()">
      Count {{ count272() }}
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
  export class BenchmarkNg272 {
    count272 = signal(0);

    increment272() {
      this.count272.update((count) => count + 1);
    }
  }