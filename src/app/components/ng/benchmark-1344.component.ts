
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1344',
    template: `<div class="benchmark-component">
    <h3>Component 1344</h3>
    <button type="button" (click)="increment1344()">
      Count {{ count1344() }}
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
  export class BenchmarkNg1344 {
    count1344 = signal(0);

    increment1344() {
      this.count1344.update((count) => count + 1);
    }
  }