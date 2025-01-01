
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-27',
    template: `<div class="benchmark-component">
    <h3>Component 27</h3>
    <button type="button" (click)="increment27()">
      Count {{ count27() }}
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
  export class BenchmarkNg27 {
    count27 = signal(0);

    increment27() {
      this.count27.update((count) => count + 1);
    }
  }