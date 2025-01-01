
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-378',
    template: `<div class="benchmark-component">
    <h3>Component 378</h3>
    <button type="button" (click)="increment378()">
      Count {{ count378() }}
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
  export class BenchmarkNg378 {
    count378 = signal(0);

    increment378() {
      this.count378.update((count) => count + 1);
    }
  }