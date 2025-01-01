
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-660',
    template: `<div class="benchmark-component">
    <h3>Component 660</h3>
    <button type="button" (click)="increment660()">
      Count {{ count660() }}
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
  export class BenchmarkNg660 {
    count660 = signal(0);

    increment660() {
      this.count660.update((count) => count + 1);
    }
  }