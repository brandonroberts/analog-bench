
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1298',
    template: `<div class="benchmark-component">
    <h3>Component 1298</h3>
    <button type="button" (click)="increment1298()">
      Count {{ count1298() }}
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
  export class BenchmarkNg1298 {
    count1298 = signal(0);

    increment1298() {
      this.count1298.update((count) => count + 1);
    }
  }