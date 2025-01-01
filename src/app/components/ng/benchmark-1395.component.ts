
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1395',
    template: `<div class="benchmark-component">
    <h3>Component 1395</h3>
    <button type="button" (click)="increment1395()">
      Count {{ count1395() }}
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
  export class BenchmarkNg1395 {
    count1395 = signal(0);

    increment1395() {
      this.count1395.update((count) => count + 1);
    }
  }