
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-730',
    template: `<div class="benchmark-component">
    <h3>Component 730</h3>
    <button type="button" (click)="increment730()">
      Count {{ count730() }}
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
  export class BenchmarkNg730 {
    count730 = signal(0);

    increment730() {
      this.count730.update((count) => count + 1);
    }
  }