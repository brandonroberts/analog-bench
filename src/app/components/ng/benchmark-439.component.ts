
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-439',
    template: `<div class="benchmark-component">
    <h3>Component 439</h3>
    <button type="button" (click)="increment439()">
      Count {{ count439() }}
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
  export class BenchmarkNg439 {
    count439 = signal(0);

    increment439() {
      this.count439.update((count) => count + 1);
    }
  }