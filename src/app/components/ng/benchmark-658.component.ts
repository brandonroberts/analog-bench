
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-658',
    template: `<div class="benchmark-component">
    <h3>Component 658</h3>
    <button type="button" (click)="increment658()">
      Count {{ count658() }}
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
  export class BenchmarkNg658 {
    count658 = signal(0);

    increment658() {
      this.count658.update((count) => count + 1);
    }
  }