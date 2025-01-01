
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-568',
    template: `<div class="benchmark-component">
    <h3>Component 568</h3>
    <button type="button" (click)="increment568()">
      Count {{ count568() }}
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
  export class BenchmarkNg568 {
    count568 = signal(0);

    increment568() {
      this.count568.update((count) => count + 1);
    }
  }