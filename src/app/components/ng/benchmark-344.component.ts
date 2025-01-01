
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-344',
    template: `<div class="benchmark-component">
    <h3>Component 344</h3>
    <button type="button" (click)="increment344()">
      Count {{ count344() }}
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
  export class BenchmarkNg344 {
    count344 = signal(0);

    increment344() {
      this.count344.update((count) => count + 1);
    }
  }