
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-544',
    template: `<div class="benchmark-component">
    <h3>Component 544</h3>
    <button type="button" (click)="increment544()">
      Count {{ count544() }}
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
  export class BenchmarkNg544 {
    count544 = signal(0);

    increment544() {
      this.count544.update((count) => count + 1);
    }
  }