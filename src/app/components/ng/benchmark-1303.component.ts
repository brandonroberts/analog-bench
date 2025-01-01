
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1303',
    template: `<div class="benchmark-component">
    <h3>Component 1303</h3>
    <button type="button" (click)="increment1303()">
      Count {{ count1303() }}
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
  export class BenchmarkNg1303 {
    count1303 = signal(0);

    increment1303() {
      this.count1303.update((count) => count + 1);
    }
  }