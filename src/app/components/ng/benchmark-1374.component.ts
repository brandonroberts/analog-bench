
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1374',
    template: `<div class="benchmark-component">
    <h3>Component 1374</h3>
    <button type="button" (click)="increment1374()">
      Count {{ count1374() }}
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
  export class BenchmarkNg1374 {
    count1374 = signal(0);

    increment1374() {
      this.count1374.update((count) => count + 1);
    }
  }