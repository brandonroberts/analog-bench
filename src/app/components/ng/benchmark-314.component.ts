
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-314',
    template: `<div class="benchmark-component">
    <h3>Component 314</h3>
    <button type="button" (click)="increment314()">
      Count {{ count314() }}
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
  export class BenchmarkNg314 {
    count314 = signal(0);

    increment314() {
      this.count314.update((count) => count + 1);
    }
  }