
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1371',
    template: `<div class="benchmark-component">
    <h3>Component 1371</h3>
    <button type="button" (click)="increment1371()">
      Count {{ count1371() }}
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
  export class BenchmarkNg1371 {
    count1371 = signal(0);

    increment1371() {
      this.count1371.update((count) => count + 1);
    }
  }