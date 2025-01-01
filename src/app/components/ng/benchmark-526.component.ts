
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-526',
    template: `<div class="benchmark-component">
    <h3>Component 526</h3>
    <button type="button" (click)="increment526()">
      Count {{ count526() }}
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
  export class BenchmarkNg526 {
    count526 = signal(0);

    increment526() {
      this.count526.update((count) => count + 1);
    }
  }