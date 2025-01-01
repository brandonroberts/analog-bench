
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1274',
    template: `<div class="benchmark-component">
    <h3>Component 1274</h3>
    <button type="button" (click)="increment1274()">
      Count {{ count1274() }}
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
  export class BenchmarkNg1274 {
    count1274 = signal(0);

    increment1274() {
      this.count1274.update((count) => count + 1);
    }
  }