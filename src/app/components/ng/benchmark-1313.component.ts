
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1313',
    template: `<div class="benchmark-component">
    <h3>Component 1313</h3>
    <button type="button" (click)="increment1313()">
      Count {{ count1313() }}
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
  export class BenchmarkNg1313 {
    count1313 = signal(0);

    increment1313() {
      this.count1313.update((count) => count + 1);
    }
  }