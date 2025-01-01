
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-489',
    template: `<div class="benchmark-component">
    <h3>Component 489</h3>
    <button type="button" (click)="increment489()">
      Count {{ count489() }}
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
  export class BenchmarkNg489 {
    count489 = signal(0);

    increment489() {
      this.count489.update((count) => count + 1);
    }
  }