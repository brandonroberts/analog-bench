
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-433',
    template: `<div class="benchmark-component">
    <h3>Component 433</h3>
    <button type="button" (click)="increment433()">
      Count {{ count433() }}
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
  export class BenchmarkNg433 {
    count433 = signal(0);

    increment433() {
      this.count433.update((count) => count + 1);
    }
  }