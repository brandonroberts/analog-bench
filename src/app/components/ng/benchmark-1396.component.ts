
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1396',
    template: `<div class="benchmark-component">
    <h3>Component 1396</h3>
    <button type="button" (click)="increment1396()">
      Count {{ count1396() }}
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
  export class BenchmarkNg1396 {
    count1396 = signal(0);

    increment1396() {
      this.count1396.update((count) => count + 1);
    }
  }