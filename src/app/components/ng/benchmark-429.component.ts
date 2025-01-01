
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-429',
    template: `<div class="benchmark-component">
    <h3>Component 429</h3>
    <button type="button" (click)="increment429()">
      Count {{ count429() }}
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
  export class BenchmarkNg429 {
    count429 = signal(0);

    increment429() {
      this.count429.update((count) => count + 1);
    }
  }