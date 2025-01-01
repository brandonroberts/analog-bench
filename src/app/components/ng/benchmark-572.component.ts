
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-572',
    template: `<div class="benchmark-component">
    <h3>Component 572</h3>
    <button type="button" (click)="increment572()">
      Count {{ count572() }}
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
  export class BenchmarkNg572 {
    count572 = signal(0);

    increment572() {
      this.count572.update((count) => count + 1);
    }
  }