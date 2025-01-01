
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-396',
    template: `<div class="benchmark-component">
    <h3>Component 396</h3>
    <button type="button" (click)="increment396()">
      Count {{ count396() }}
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
  export class BenchmarkNg396 {
    count396 = signal(0);

    increment396() {
      this.count396.update((count) => count + 1);
    }
  }