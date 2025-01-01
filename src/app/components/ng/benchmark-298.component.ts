
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-298',
    template: `<div class="benchmark-component">
    <h3>Component 298</h3>
    <button type="button" (click)="increment298()">
      Count {{ count298() }}
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
  export class BenchmarkNg298 {
    count298 = signal(0);

    increment298() {
      this.count298.update((count) => count + 1);
    }
  }