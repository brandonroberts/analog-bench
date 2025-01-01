
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1314',
    template: `<div class="benchmark-component">
    <h3>Component 1314</h3>
    <button type="button" (click)="increment1314()">
      Count {{ count1314() }}
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
  export class BenchmarkNg1314 {
    count1314 = signal(0);

    increment1314() {
      this.count1314.update((count) => count + 1);
    }
  }