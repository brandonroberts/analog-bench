
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-738',
    template: `<div class="benchmark-component">
    <h3>Component 738</h3>
    <button type="button" (click)="increment738()">
      Count {{ count738() }}
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
  export class BenchmarkNg738 {
    count738 = signal(0);

    increment738() {
      this.count738.update((count) => count + 1);
    }
  }