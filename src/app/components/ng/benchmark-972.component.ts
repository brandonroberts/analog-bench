
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-972',
    template: `<div class="benchmark-component">
    <h3>Component 972</h3>
    <button type="button" (click)="increment972()">
      Count {{ count972() }}
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
  export class BenchmarkNg972 {
    count972 = signal(0);

    increment972() {
      this.count972.update((count) => count + 1);
    }
  }