
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-436',
    template: `<div class="benchmark-component">
    <h3>Component 436</h3>
    <button type="button" (click)="increment436()">
      Count {{ count436() }}
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
  export class BenchmarkNg436 {
    count436 = signal(0);

    increment436() {
      this.count436.update((count) => count + 1);
    }
  }