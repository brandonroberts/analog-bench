
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-384',
    template: `<div class="benchmark-component">
    <h3>Component 384</h3>
    <button type="button" (click)="increment384()">
      Count {{ count384() }}
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
  export class BenchmarkNg384 {
    count384 = signal(0);

    increment384() {
      this.count384.update((count) => count + 1);
    }
  }