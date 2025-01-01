
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-316',
    template: `<div class="benchmark-component">
    <h3>Component 316</h3>
    <button type="button" (click)="increment316()">
      Count {{ count316() }}
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
  export class BenchmarkNg316 {
    count316 = signal(0);

    increment316() {
      this.count316.update((count) => count + 1);
    }
  }