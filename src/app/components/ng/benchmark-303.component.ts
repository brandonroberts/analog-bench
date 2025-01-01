
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-303',
    template: `<div class="benchmark-component">
    <h3>Component 303</h3>
    <button type="button" (click)="increment303()">
      Count {{ count303() }}
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
  export class BenchmarkNg303 {
    count303 = signal(0);

    increment303() {
      this.count303.update((count) => count + 1);
    }
  }