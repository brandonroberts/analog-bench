
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1366',
    template: `<div class="benchmark-component">
    <h3>Component 1366</h3>
    <button type="button" (click)="increment1366()">
      Count {{ count1366() }}
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
  export class BenchmarkNg1366 {
    count1366 = signal(0);

    increment1366() {
      this.count1366.update((count) => count + 1);
    }
  }