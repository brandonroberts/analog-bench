
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-790',
    template: `<div class="benchmark-component">
    <h3>Component 790</h3>
    <button type="button" (click)="increment790()">
      Count {{ count790() }}
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
  export class BenchmarkNg790 {
    count790 = signal(0);

    increment790() {
      this.count790.update((count) => count + 1);
    }
  }