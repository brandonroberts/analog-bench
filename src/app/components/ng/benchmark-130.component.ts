
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-130',
    template: `<div class="benchmark-component">
    <h3>Component 130</h3>
    <button type="button" (click)="increment130()">
      Count {{ count130() }}
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
  export class BenchmarkNg130 {
    count130 = signal(0);

    increment130() {
      this.count130.update((count) => count + 1);
    }
  }