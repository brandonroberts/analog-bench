
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-849',
    template: `<div class="benchmark-component">
    <h3>Component 849</h3>
    <button type="button" (click)="increment849()">
      Count {{ count849() }}
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
  export class BenchmarkNg849 {
    count849 = signal(0);

    increment849() {
      this.count849.update((count) => count + 1);
    }
  }