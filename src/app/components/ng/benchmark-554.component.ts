
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-554',
    template: `<div class="benchmark-component">
    <h3>Component 554</h3>
    <button type="button" (click)="increment554()">
      Count {{ count554() }}
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
  export class BenchmarkNg554 {
    count554 = signal(0);

    increment554() {
      this.count554.update((count) => count + 1);
    }
  }