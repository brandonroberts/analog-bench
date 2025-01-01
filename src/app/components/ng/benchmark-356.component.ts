
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-356',
    template: `<div class="benchmark-component">
    <h3>Component 356</h3>
    <button type="button" (click)="increment356()">
      Count {{ count356() }}
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
  export class BenchmarkNg356 {
    count356 = signal(0);

    increment356() {
      this.count356.update((count) => count + 1);
    }
  }