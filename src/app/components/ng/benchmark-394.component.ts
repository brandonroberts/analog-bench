
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-394',
    template: `<div class="benchmark-component">
    <h3>Component 394</h3>
    <button type="button" (click)="increment394()">
      Count {{ count394() }}
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
  export class BenchmarkNg394 {
    count394 = signal(0);

    increment394() {
      this.count394.update((count) => count + 1);
    }
  }