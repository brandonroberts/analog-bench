
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-473',
    template: `<div class="benchmark-component">
    <h3>Component 473</h3>
    <button type="button" (click)="increment473()">
      Count {{ count473() }}
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
  export class BenchmarkNg473 {
    count473 = signal(0);

    increment473() {
      this.count473.update((count) => count + 1);
    }
  }