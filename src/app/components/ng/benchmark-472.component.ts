
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-472',
    template: `<div class="benchmark-component">
    <h3>Component 472</h3>
    <button type="button" (click)="increment472()">
      Count {{ count472() }}
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
  export class BenchmarkNg472 {
    count472 = signal(0);

    increment472() {
      this.count472.update((count) => count + 1);
    }
  }