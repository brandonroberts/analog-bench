
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1346',
    template: `<div class="benchmark-component">
    <h3>Component 1346</h3>
    <button type="button" (click)="increment1346()">
      Count {{ count1346() }}
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
  export class BenchmarkNg1346 {
    count1346 = signal(0);

    increment1346() {
      this.count1346.update((count) => count + 1);
    }
  }