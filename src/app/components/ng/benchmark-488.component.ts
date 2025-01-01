
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-488',
    template: `<div class="benchmark-component">
    <h3>Component 488</h3>
    <button type="button" (click)="increment488()">
      Count {{ count488() }}
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
  export class BenchmarkNg488 {
    count488 = signal(0);

    increment488() {
      this.count488.update((count) => count + 1);
    }
  }