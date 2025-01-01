
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-485',
    template: `<div class="benchmark-component">
    <h3>Component 485</h3>
    <button type="button" (click)="increment485()">
      Count {{ count485() }}
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
  export class BenchmarkNg485 {
    count485 = signal(0);

    increment485() {
      this.count485.update((count) => count + 1);
    }
  }