
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-23',
    template: `<div class="benchmark-component">
    <h3>Component 23</h3>
    <button type="button" (click)="increment23()">
      Count {{ count23() }}
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
  export class BenchmarkNg23 {
    count23 = signal(0);

    increment23() {
      this.count23.update((count) => count + 1);
    }
  }