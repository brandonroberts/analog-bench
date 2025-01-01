
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-358',
    template: `<div class="benchmark-component">
    <h3>Component 358</h3>
    <button type="button" (click)="increment358()">
      Count {{ count358() }}
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
  export class BenchmarkNg358 {
    count358 = signal(0);

    increment358() {
      this.count358.update((count) => count + 1);
    }
  }