
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1343',
    template: `<div class="benchmark-component">
    <h3>Component 1343</h3>
    <button type="button" (click)="increment1343()">
      Count {{ count1343() }}
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
  export class BenchmarkNg1343 {
    count1343 = signal(0);

    increment1343() {
      this.count1343.update((count) => count + 1);
    }
  }